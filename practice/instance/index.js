import Vue from 'vue'

// new Vue({
//   // el: '#app',
//   template: '<div>this is a practice</div>'
// })
const app = new Vue({
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
})

app.$mount('#app')

// let i = 0

setInterval(() => {
  // app.text += 1
  // i++
  // app.$set(app.obj, 'a', i)
  // app.obj.a = i
  // app.$forceUpdate()
}, 1000)

// console.log(app.$data)
// console.log(app.$options)
// console.log(app.$el)
// console.log(app.$props)
// console.log(app.$children)
// console.log(app.$root === app)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)
