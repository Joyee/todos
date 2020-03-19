const Koa = require('koa')
const send = require('koa-send')
// const pageRouter = require('./routers/dev-ssr')
const app = new Koa()
const path = require('path')
const staticRouter = require('./routers/static')

const isDev = process.env.NODE_ENV === 'development'

app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (error) {
    console.log('error', error)
    ctx.status = 500
    if (isDev) {
      ctx.body = error.message
    } else {
      ctx.body = '稍后重试'
    }
  }
})
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../') })
  } else {
    await next()
  }
})
app.use(staticRouter.routes()).use(staticRouter.allowedMethods())

let pageRouter

if (isDev) {
  pageRouter = require('./routers/dev-ssr')
} else {
  pageRouter = require('./routers/ssr')
}
// 注册路由
app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3000

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
