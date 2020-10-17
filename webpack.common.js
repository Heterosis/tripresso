/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  entry: ['@babel/polyfill', path.resolve('src', 'index.jsx')],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|svg|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: '[folder]/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.html'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css?h=[hash]' }),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      favicon: path.resolve('src', 'assets', 'favicon.ico'),
    }),
  ],
  output: {
    filename: '[name].js?h=[hash]',
    path: path.resolve('dist'),
  },
};
