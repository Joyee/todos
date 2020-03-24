import createApp from './create-app'

const { app, router } = createApp()
console.log('===app===', app)
router.onReady(() => {
  app.$mount('#app')
})
