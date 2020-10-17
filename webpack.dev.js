/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 9000,
  },
});
