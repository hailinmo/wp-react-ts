const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    react_core: [
      'react',
      'react-dom',
      'react-router-dom'
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  output: {
    path: path.join(__dirname, '../public/dll'),
    filename: '[name].bundle.[hash:7].js',
    library: '[name]_library',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!css*']
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, '../public/dll', '[name].manifest.json'),
      name: '[name]_library'
    })
  ]
}
