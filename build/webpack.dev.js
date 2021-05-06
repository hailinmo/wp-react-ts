const path = require('path')
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')

const webpackConfig = merge(commonConfig, {
  mode: 'development',
  // devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '../dist'),
    open: false,
    hot: true,
    quiet: true,
    port: 8082,
  },
})

module.exports = webpackConfig
