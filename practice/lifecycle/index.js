import Vue from 'vue'

const app = new Vue({
  template: `<div>{{text}}</div>`,
  data: {
    text: 0
  },
  beforeCreate () {
    // console.log(this, 'beforeCreate')
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    // console.log(this, 'created')
    console.log(this.$el, 'created')
  },
  beforeMount () {
    // console.log(this, 'beforeMount')
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    // console.log(this, 'mounted')
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    // 只在开发环境中使用
    console.log(this, 'destroyed')
  },
  render (h) {
    // throw new TypeError('render error')
    console.log('render function invoked')
    return h('div', {}, this.text)
  },
  renderError () {},
  errorCaptured () {
    // 会向上冒泡,正式环境中也可以使用
  }
})

app.$mount('#app')

setTimeout(() => {
  app.text += 1
}, 1000)

// setTimeout(() => {
//   app.$destroy()
// }, 2000)
