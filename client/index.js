import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'
import createRouter from './config/router'
// import store from './store/store'
import createStore from './store/store'

import './assets/styles/global.styl'
// ==== test start
// import './assets/styles/style.css'
// import './assets/styles/style.styl'
// import './assets/images/avatar.jpeg'
// test end ====

// const root = document.createElement('div')
// document.body.appendChild(root)

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// 模块动态注册
store.registerModule('c', {
  state: {
    text: '这是c模块的text'
  }
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach invoked')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
