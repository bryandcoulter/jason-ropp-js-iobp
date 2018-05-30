const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        // Is this path style correct?
        include: path.resolve(__dirname, '/*/*.html'),
        // Is this format correct?
        exclude: [
          path.resolve(__dirname, 'index.html'),
          // Does this need a ./ at the beginning?
          path.resolve(__dirname, 'pages/*.html'),
        ],
        use: [
          // Chained loaders are applied last to first
          // So how is html-loader included? Is that automatic while babel-loader is not?
          { loader: 'babel-loader' },
          { loader: 'polymer-webpack-loader' }
        ]
        // options: {
        //   name: '[name].[ext]',
        //   outputPath: "/",
        //   // Change later, for now I just want to be able to see output more clearly
        //   minimize: false,
        // }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new CopyWebpackPlugin([
      // { from: 'src/*/*.html', to: '[name].[ext]' },
      { from: 'src/index.html', to: '[name].[ext]' },
      { from: 'node_modules/@banno/polymer/polymer.html', to: '[name].[ext]' },
    ]),
    // // Does the same thing as copywebpackplugin but for webpack-dev-server
    // new WriteFilePlugin(),
  ],

  // Anything that wp doesn't generate on its own gets served out of dist
  devServer: {
    contentBase: 'dist'
  }
};
