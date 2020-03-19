import createApp from './create-app'

const { app, router, store } = createApp()
const meta = app.$meta() // here

export default context => {
  return new Promise((resolve, reject) => {
    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }
      context.meta = meta
      context.state = store.state
      context.router = router
      resolve(app)
    })
  })
}
