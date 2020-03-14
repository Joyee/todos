module.exports = (isDev) => {
  return {
    preserveWhiteSpace: true,
    extractCSS: !isDev,
    // modules: true,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:6]' : '[hash:base64:6]',
      camelCase: true
    }
    // hotReload: false, // 根据环境变量生成
  }
}
