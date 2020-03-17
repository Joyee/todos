const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const defaultPlugins = [
  new webpack.DefinePlugin({
    'proccess.env.NODE_ENV': '"development"'
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'template.html')
  })
]
let config

const devServer = {
  host: '0.0.0.0',
  port: 8080,
  hot: true,
  overlay: {
    errors: true,
  },
  open: true,
  historyApiFallback: {
    index: '/public/index.html'
  }
}

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              localIdentName: '[path]-[name]-[hash:base64:6]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ],
  },
  devServer,
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
