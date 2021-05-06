const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const commonConfig = require('./webpack.common')

const cssRules = commonConfig.module.rules.find(item => item.test.test('.css'))
if (cssRules) {
  cssRules.use[0] = MiniCssExtractPlugin.loader
}

const webpackConfig = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
})

module.exports = webpackConfig
