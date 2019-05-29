// const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  // devtool: 'inline-source-map',
  devtool: 'eval', // react-hot-loader recommend
  devServer: { // https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx
    hot: true,
    compress: true,
    historyApiFallback: true // when use react-router-dom browserRouter ( html 5 api) should add this item
    // see https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx 
    // When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses. Enable this by passing
    // historyApiFallback: true
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src/index.html'),
    // }),
    new webpack.HotModuleReplacementPlugin(), // https://webpack.docschina.org/guides/hot-module-replacement/
  ],
  mode: 'development'
});
