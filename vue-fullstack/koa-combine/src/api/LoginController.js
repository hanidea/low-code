import send from '../config/MailConfig'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import config from '../config'
import { checkCode } from '../common/Utils'
import User from '../model/User'

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
            let checkUserPasswd = ''
            let user = await User.findOne({
                username: body.username
            })
            if (user.password === body.password) {
                checkUserPasswd = true 
            }
            if(checkUserPasswd){
                console.log('Hello login')
                let token = jsonwebtoken.sign({ _id: 'brian'}, 
                config.JWT_SECRET,{
                    // exp: Math.floor(Date.now()/1000)+60*60*24
                    expiresIn: '1d'
                })
                ctx.body = {
                    code: 200,
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
}


export default new LoginController