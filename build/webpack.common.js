const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  target: 'web',
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js',
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
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      inject: 'body',
      minify: false,
    }),
    // 核心基本依赖（模块公共依赖）配置(打包优化，以下为预先打包，从打包过程中排除它们)
    // new webpack.DllReferencePlugin({
    //   manifest: require('../dll/react_core.manifest.json'),
    // }),

    // new AddAssetHtmlPlugin({
    //   filepath: path.resolve(__dirname, '../dll/*.js'),
    //   publicPath: '/dll',
    //   outputPath: '../dist/dll',
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
        extractComments: false, // 去除打包生成的LICENSE文件;
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
        common: {
          name: 'chunk-common',
          test: /[\\/]node_modules[\\/]_?react|antd/,
          priority: 20,
          chunks: 'initial',
        },
        echarts: {
          name: 'echarts',
          test: /[\\/]node_modules[\\/]_?echarts|zrender/,
          priority: 20,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /.(m?js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            // plugins: [['import', { libraryName: 'antd', style: 'css' }]], // 插件无效，与babel7不兼容
          },
        },
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf|pdf)(?!.js)\??.*$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][hash:8].[ext]', // 单独指定 名字
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') },
          },
        ],
      },
    ],
  },
}
