import combineRoutes from 'koa-combine-routers'

import publicRouter from "./PublicRouter";

export default combineRoutes(publicRouter)
