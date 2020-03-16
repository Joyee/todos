import Vue from 'vue'
import App from './app.vue'
import router from './config/router'

import './assets/css/global.styl'
// ==== test start
// import './assets/css/style.css'
// import './assets/css/style.styl'
// import './assets/images/avatar.jpeg'
// test end ====

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)
