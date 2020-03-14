const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractWebpackPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base.js')
const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
  new webpack.DefinePlugin({
    'proccess.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new HtmlWebpackPlugin()
]
let config

const devServer = {
  host: '0.0.0.0',
  port: 8000,
  hot: true,
  overlay: {
    errors: true,
  },
  open: true,
}

if (isDev) {
  config = merge(baseConfig, {
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
                localIdentName: isDev ? '[path]-[name]-[hash:base64:6]' : '[hash:base64:6]'
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
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js'),
      vendor: ['vue']
    },
    output: {
      filename: '[name]:[chunkHash:8].js',
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: ExtractWebpackPlugin.extract({
            fallback: "vue-style-loader",
            use: [
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: true
                }
              },
              "stylus-loader"
            ]
          })
        }
      ]
    },
    plugins: defaultPlugins.concat([
      new ExtractWebpackPlugin('styles.[contentHash:8].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      })
    ])
  })
}

module.exports = config