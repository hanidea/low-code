import send from '../config/MailConfig'
import bcrypt from 'bcrypt'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '@/config'
import {checkCode, generateToken} from '../common/Utils'
import User from '../model/User'
import SignRecord from "@/model/SignRecord";
import { getValue, setValue } from '@/config/RedisConfig'
import { getJWTPayload } from '../common/Utils'
import { v4 as uuidv4 } from 'uuid'
import { wxGetUserInfo } from "@/common/wxUtils";

class LoginController {
    async forget (ctx) {
        const { body } = ctx.request
        const user = await User.findOne({ username: body.username })
        if (!user) {
            ctx.body = {
                code: 404,
                msg: '请检查账号！'
            }
            return
        }
        try {
            const key = uuidv4()
            setValue(
                key,
                jsonwebtoken.sign({ _id: user._id }, config.JWT_SECRET, {
                    expiresIn: '30m'
                }),
                30 * 60
            )
            // body.username -> database -> email
            const result = await send({
                type: 'reset',
                data: {
                    key: key,
                    username: body.username
                },
                expire: moment()
                    .add(30, 'minutes')
                    .format('YYYY-MM-DD HH:mm:ss'),
                email: body.username,
                user: user.name ? user.name : body.username
            })
            ctx.body = {
                code: 200,
                data: result,
                msg: '邮件发送成功'
            }
        } catch (e) {
            console.log(e)
        }
    }
    async login (ctx) {
        const { body } = ctx.request
        let sid = body.sid
        let code = body.code
        let result = await checkCode(sid, code)
        if (result) {
            let checkUserPasswd = false
            let user = await User.findOne({
                username: body.username
            })
            if (await bcrypt.compare(body.password, user.password)) {
                checkUserPasswd = true
            }
            if(checkUserPasswd){
                const userObj = user.toJSON()
                const arr = ['password','username','roles']
                arr.map((item) =>{
                    delete userObj[item]
                })
                let token = jsonwebtoken.sign({ _id: userObj._id},
                config.JWT_SECRET,{
                    // exp: Math.floor(Date.now()/1000)+60*60*24
                    expiresIn: '1d'
                })
                const signRecord = await SignRecord.findByUid(userObj._id)
                if (signRecord !== null) {
                    if (moment(signRecord.created).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')){
                        userObj.isSign = true
                    } else {
                        userObj.isSign = false
                    }
                    userObj.lastSign = signRecord.created
                } else {
                    userObj.isSign = false
                }
                ctx.body = {
                    code: 200,
                    data: userObj,
                    token: token
                }
            } else {
                ctx.body = {
                    code: 404,
                    msg: '用户名或者密码错误'
                }
            }
        } else {
            ctx.body = {
                code: 401,
                msg: '图片验证码不正确，请检查!'
            }
        }

    }
    async reg (ctx) {
        const { body } = ctx.request
        let sid = body.sid
        let code = body.code
        let msg = {}
        let result = await checkCode(sid, code)
        let check = true
        if (result) {
            let user1 = await User.findOne({ username: body.username })
            if (user1 !== null && typeof user1.username !== 'undefined') {
                msg.username = ['此邮箱已经注册，可以通过邮箱找回密码']
                check = false
            }
            let user2 = await User.findOne({ name: body.name })
            if (user2 !== null && typeof user2.name !== 'undefined') {
                msg.name = ['此昵称已经被注册，请修改']
                check = false
            }
            if (check) {
                body.password = await bcrypt.hash(body.password, 5)
                let user = new User({
                  username: body.username,
                  name: body.name,
                  password: body.password,
                  created: moment().format('YYYY-MM-DD HH:mm:ss')
                })
                let result = await user.save()
                ctx.body = {
                  code: 200,
                  data: result,
                  msg: '注册成功'
                }
                return
            }
        } else {
            msg.code = ['验证码已经失效，请重新获取！']
        }
        ctx.body = {
            code: 500,
            msg: msg
        }
    }
    // 密码重置
    async reset (ctx) {
        const { body } = ctx.request
        const sid = body.sid
        const code = body.code
        let msg = {}
        // 验证图片验证码的时效性、正确性
        const result = await checkCode(sid, code)
        if (!body.key) {
            ctx.body = {
                code: 500,
                msg: '请求参数异常，请重新获取链接'
            }
            return
        }
        if (!result) {
            msg.code = ['验证码已经失效，请重新获取！']
            ctx.body = {
                code: 500,
                msg: msg
            }
            return
        }
        const token = await getValue(body.key)
        if (token) {
            const obj = getJWTPayload('Bearer ' + token)
            body.password = await bcrypt.hash(body.password, 5)
            await User.updateOne(
                { _id: obj._id },
                {
                    password: body.password
                }
            )
            ctx.body = {
                code: 200,
                msg: '更新用户密码成功！'
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '链接已经失效'
            }
        }
    }

    async wxlogin (ctx) {
        // 接收用户传递code
        const { body } = ctx.request
        // 请求微信API：https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
        // 如果用户不存在，则创建用户
        let user
        if (body.code) {
            const wxUserInfo = await wxGetUserInfo(body.user, body.code)
            if (wxUserInfo.errcode === 0) {
                user = await User.findOrCreatedByOpenData(wxUserInfo)
                ctx.body = {
                    code: 200,
                    data: user,
                    token: generateToken({_id: user._id}),
                    msg: '登录成功'
                }
            } else {
                ctx.throw({code: wxUserInfo.errcode || 501, message: wxUserInfo.errmsg})
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '没有足够的参数'
            }
        }
    }
}


export default new LoginController
