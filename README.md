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