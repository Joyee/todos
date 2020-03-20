const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractWebpackPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const defaultPlugins = [
  new webpack.DefinePlugin({
    'proccess.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]
let config

config = merge(baseConfig, {
  target: 'node',
  entry: path.join(__dirname, '../client/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  devtool: 'source-map',
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractWebpackPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      }
    ]
  },
  plugins: defaultPlugins.concat([
    new ExtractWebpackPlugin('styles.[contentHash:8].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ])
})

module.exports = config
