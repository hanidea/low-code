import send from '../config/MailConfig'
import bcrypt from 'bcrypt'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config'
import { checkCode } from '../common/Utils'
import User from '../model/User'
import SignRecord from "@/model/SignRecord";
class LoginController {
    constructor () {}
    async forget(ctx) {
        const { body } = ctx.request
        try{
         let result = await send({
            code: '1234',
            expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
            email: body.username,
            user: 'junjie'
         })
        ctx.body = {
            code: 200,
            data: result,
            msg: '邮件发送成功'
        }
        }catch(e){
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
}


export default new LoginController
