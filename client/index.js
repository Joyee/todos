import Vue from 'vue'
import App from './app.vue'
import router from './config/router'

import './assets/styles/global.styl'
// ==== test start
// import './assets/styles/style.css'
// import './assets/styles/style.styl'
// import './assets/images/avatar.jpeg'
// test end ====

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)
