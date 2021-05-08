const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
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
    new webpack.DllReferencePlugin({
      manifest: require('../dll/react_core.manifest.json'),
    }),

    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../dll/*.js'),
      publicPath: '/dll',
      outputPath: '../dist/dll',
    }),

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
      // {
      //   test: /\.(ts|tsx)?$/,
      //   use: [
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         transpileOnly: true,
      //         getCustomTransformers: () => ({
      //           before: [
      //             tsImportPluginFactory({
      //               libraryName: 'antd', // 此方案可达到按需加载css的目的；
      //               libraryDirectory: 'lib',
      //               style: 'css',
      //             }),
      //           ],
      //         }),
      //         compilerOptions: {
      //           module: 'es2015',
      //         },
      //       },
      //     },
      //   ],
      //   exclude: /node_modules/,
      // },
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
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') },
          },
          'postcss-loader',
        ],
      },
    ],
  },
}
