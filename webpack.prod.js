const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    // new HtmlWebpackPlugin({ // dist/assets and dist/index.html
    //   // template: './index.html'
    //   template: path.resolve(__dirname, 'src/index.html'),
    //   filename: "../index.html" // 以 output 資料夾 dist/assets 為基礎 defalut: index.html
    // }),
    // new UglifyJSPlugin({ // default in webpack 4
    //   sourceMap: true
    // }),
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  mode: 'production'
});
