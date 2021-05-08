const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const commonConfig = require('./webpack.common')

const cssRules = commonConfig.module.rules.find((item) =>
  item.test.test('.css')
)
const scssRules = commonConfig.module.rules.find((item) =>
  item.test.test('.scss')
)
if (cssRules) {
  cssRules.use[0] = MiniCssExtractPlugin.loader
}
if (scssRules) {
  cssRules.use[0] = MiniCssExtractPlugin.loader
}

const webpackConfig = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    process.env.npm_config_report ? new BundleAnalyzerPlugin() : '',
  ],
})

module.exports = webpackConfig
