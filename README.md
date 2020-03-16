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

### 安装包
```
npm i webpack@^3.0.0 安装3.0最后的版本
```

### 升级webpack4
1. 依赖包升级和卸载
```
先卸载
npm uninstall webpack webpack-dev-server webpack-merge

再安装 需要安装webpack-cli(升级后 webpack只是作为node包，webpack启动的部分命令行脚本是在webpack-cli中)
npm i webpack webpack-dev-server webpack-merge webpack-cli --save-dev

相应的其他依赖包 先卸载 再升级
extract-text-webpack-plugin@next 下个版本(未发布的)
```
2. 配置 webpack.config.base.js
```
config = {
  mode: process.env.NODE_ENV || 'production',
}
```

3. 配置 webpack.config.client.js
```
webpack4 废弃 CommonsChunkPlugin, 使用 optimization.splitChunks

optimization: {
  splitChunks: {
    chunks: 'all'
  },
  runtimeChunk: true,
  noEmitOnErrors: true
}
配置完成 运行 npm run start 报错 "eslint" undefined
需要安装 npm i eslint-loader@^2.0.0 --save-dev
webpack4中 extract-text-webpack-plugin 用 mini-css-extract-plugin代替

```

4. 