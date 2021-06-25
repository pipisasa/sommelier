const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const miniCss = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.EnvironmentPlugin({
      'NODE_ENV': 'production'
    }),
    new miniCss({
      filename: 'style.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' }
      ]
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
}