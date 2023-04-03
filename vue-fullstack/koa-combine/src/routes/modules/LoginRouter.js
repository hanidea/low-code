import Router from "koa-router";
import LoginController from "@/api/LoginController";
import loginController from "@/api/LoginController";

const router = new Router()

router.prefix('/login')
router.post('/forget', LoginController.forget)
router.post('/login', LoginController.login)
router.post('/reg', LoginController.reg)
// 密码重置
router.post('/reset', LoginController.reset)
// 微信登录
router.post('/login/wxlogin', loginController.wxlogin)

export default router
