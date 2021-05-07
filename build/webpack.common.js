const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { getDllFiles } = require('./utils')

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].main.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '测试',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      favicon: '',
      inject: 'body',
      minify: false,
      dllJs: getDllFiles().map(item => `/dll/${item}`),
    }),
    // 核心基本依赖（模块公共依赖）配置(打包优化，以下为预先打包，从打包过程中排除它们)
    new webpack.DllReferencePlugin({
      manifest: require('../public/dll/react_core.manifest.json'),
    }),

    // new AddAssetHtmlPlugin({
    //   filepath: path.resolve(__dirname, '../public/dll/*.js'),
    //   publicPath: '/dll',
    //   outputPath: '/dll',
    // }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          globOptions: { ignore: ['**/index.html'] },
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf|pdf)(?!.js)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: path.posix.join('', 'images/[name].[ext]?[hash]'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
}
