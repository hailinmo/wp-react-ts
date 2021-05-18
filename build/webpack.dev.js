const path = require('path')
const { merge } = require('webpack-merge')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const commonConfig = require('./webpack.common')

const webpackConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '../dist'),
    open: false,
    hot: true,
    // quiet: true,
    port: 8082,
  },
  plugins: [new ErrorOverlayPlugin()],
})

module.exports = webpackConfig
