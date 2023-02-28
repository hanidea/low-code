import combineRoutes from 'koa-combine-routers'

import publicRouter from "./modules/PublicRouter";
import loginRouter from "./modules/LoginRouter";
import userRouter from "./modules/UserRouter";

// 加载目录中的Router中间件
const moduleFiles = require.context('./modules', true, /\.js$/)

// reduce方法去拼接 koa-combine-router
const modules = moduleFiles.keys().reduce((items, path) => {
    const value = moduleFiles(path)
    items.push(value.default)
    return items
}, [])

export default combineRoutes(
    modules
    // publicRouter,
    // loginRouter,
    // userRouter
)
