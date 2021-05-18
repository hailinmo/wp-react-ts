const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const commonConfig = require('./webpack.common')

commonConfig.module.rules
  .filter((rule) => rule?.use?.length)
  .filter((rule) => rule.use.includes('style-loader'))
  .map((rule) => (rule.use[0] = MiniCssExtractPlugin.loader))

const prodConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
  ],
}
if (process.env.npm_config_report) {
  prodConfig.plugins.push(new BundleAnalyzerPlugin())
}

const webpackConfig = merge(commonConfig, prodConfig)

module.exports = webpackConfig
