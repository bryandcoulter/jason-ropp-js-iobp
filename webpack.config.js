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
		new CopyWebpackPlugin([{from: 'src/components/*', to: '[name].[ext]'},
			{ from: 'src/index.html', to: '[name].[ext]' },
			{ from: 'node_modules/@banno/polymer/polymer.html', to: '[name].[ext]' },
		]),

		// Does the same thing as copywebpackplugin but for webpack-dev-server
		new WriteFilePlugin(),
		// new HtmlWebPackPlugin({
		// 	template: "src/index.html",
		// 	filename: "index.html"
		// })
		// new HtmlWebPackPlugin({
		// 	template: "./src/components/edit-user.html",
		// 	filename: "./edit-user.html"
		// }),
		// new HtmlWebPackPlugin({
		// 	template: "./src/components/new-user.html",
		// 	filename: "./new-user.html"
		// }),
		// new HtmlWebPackPlugin({
		// 	template: "./src/components/user-profile.html",
		// 	filename: "./user-profile.html"
		// }),
		// new HtmlWebPackPlugin({
		// 	template: "./src/components/users-list.html",
		// 	filename: "./users-list.html"
		// }),
		// new HtmlWebPackPlugin({
		// 	template: "./src/components/nav-bar.html",
		// 	filename: "./nav-bar.html"
		// }),
		// new HtmlWebPackPlugin({
		// 	template: "./node_modules/@banno/polymer/polymer.html",
		// 	filename: "./polymer.html"
		// })
	],

	// Anything that wp doesn't generate on its own gets served out of dist
	devServer: {
		contentBase: 'dist'
	}
};
