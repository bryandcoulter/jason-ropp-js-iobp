const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
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
				use:  ['style-loader', 'css-loader']
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							name: '[name].[ext]',
							outputPath: "/",
							minimize: true,
						}
					}
				],
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('dist'),
		new CopyWebpackPlugin([
			{ from: 'src/*/*.html', to: '[name].[ext]' },
			// { from: 'src/pages/*', to: '[name].[ext]' },
			{ from: 'src/index.html', to: '[name].[ext]' },
			{ from: 'node_modules/@banno/polymer/polymer.html', to: '[name].[ext]' },
			{ from: 'src/services/styles.css', to: '[name].[ext]' },
		]),
		// Does the same thing as copywebpackplugin but for webpack-dev-server
		new WriteFilePlugin(),
	],

	// Anything that wp doesn't generate on its own gets served out of dist
	devServer: {
		contentBase: 'dist'
	}
};
