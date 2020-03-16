# todos
通过一个todolist应用回顾webpack

## cssmodule配置
cssmodule配置[https://vue-loader.vuejs.org/zh/guide/css-modules.html]
```
module.exports = (isDev) => {
  return {
    preserveWhiteSpace: true,
    extractCSS: !isDev,
    // modules: true,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:6]' : '[hash:base64:6]',
      camelCase: true
    },
    // hotReload: false, // 根据环境变量生成
  }
}
```

```
webpack.config.client.js

module: {
  rules: [
    {
      loader: 'css-loader',
      options: {
        module: true,
        localIdentName: isDev ? '[path]-[name]-[hash:base64:6]' : '[hash:base64:6]'
      }
    },
  ]
}

client/layout/footer.jsx

// import '../assets/css/footer.styl'
import className from '../assets/css/footer.styl'

export default {
  data() {
    return {
      author: 'xiaofeng'
    }
  },
  render() {
    return (
      // <div id="footer">
      <div id={className.footer}>
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
```
### vue练习
1. webpack.config.practice.js 配置
```
新增
resolve: {
  alias: {
    'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
  }
},
使用 vue.esm.js 为了能够编译 template
new Vue({
  el: div,
  template: '<div>this is a practice</div>'
})

```
2. vue挂载
```
new Vue({
  // el: '#app',
  template: '<div>this is a practice</div>'
})

const app = new Vue({
  template: '<div>this is a practice</div>'
})

app.$mount('#app')
```