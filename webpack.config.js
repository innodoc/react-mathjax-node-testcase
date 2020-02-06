const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    path: distPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new HtmlWebpackRootPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js'],
  },
}
