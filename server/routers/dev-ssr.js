const KoaRouter = require('koa-router')
const axios = require('axios')
const MFS = require('memory-fs')
const fs = require('fs')
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')
const path = require('path')

const serverRender = require('./server-render')
const serverConfig = require('../../build/webpack.config.server')

const serverCompiler = webpack(serverConfig)
const mfs = new MFS()

serverCompiler.outputFileSystem = mfs

let bundle

serverCompiler.watch({
  // 配置对象
}, (err, stats) => {
  if (err) {
    console.error(err.stack || err)
    if (err.details) {
      console.error(err.details)
    }
    return
  }

  const info = stats.toJson()

  if (stats.hasErrors()) {
    info.errors.forEach(err => {
      console.log(err)
    })
  }

  if (stats.hasWarnings()) {
    info.warnings.forEach((warning) => {
      console.warn(warning)
    })
  }

  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json' // 默认
  )
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('create new bundle')
})

const handleSSR = async (ctx) => {
  if (!bundle) {
    ctx.body = '稍等一下下...'
    return
  }

  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8000/public/vue-ssr-client-manifest.json'
  )

  const clientManifest = clientManifestResp.data

  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8'
  )

  const renderer = VueServerRenderer
    .createBundleRenderer(bundle, {
      inject: false, // 是否执行自动注入
      clientManifest
    })

  await serverRender(ctx, renderer, template)
}

const router = new KoaRouter()
router.get('*', handleSSR)

module.exports = router
