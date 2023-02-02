const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const cors = require('@koa/cors')
const { koaBody } = require('koa-body')
const json = require('koa-json')

router.prefix('/api')

router.get('/', ctx => {
    console.log(ctx.request);
    ctx.body = 'Hello World'
})
router.get('/api', ctx => {
    const params = ctx.request.query
    console.log(params);
    console.log(params.name,params.age)
    //console.log(ctx.request);
    ctx.body = {
        name: params.name,
        age: params.age
    }
})

router.get('/async',async (ctx) => {
    let result = await new Promise((resolve) =>{
        setTimeout(function () {
            resolve('Hello world')
        },2000)
    })
    ctx.body = result
})

router.post('/post',async (ctx) =>{
    let { body } = ctx.request
    console.log(body);
    console.log(ctx.request);
    ctx.body = {
        ...body
    }
})

app.use(koaBody())
app.use(cors())
app.use(json({
    pretty: false, param: 'pretty'
}))

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)
