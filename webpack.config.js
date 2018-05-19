const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							name: '[name].[ext]',
							outputPath: "/",
							minimize: true,
							attrs: ['link:href', 'script:src']
						}
					}
				],
				exclude: path.resolve(__dirname, 'src/index.html')
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			hash: true,
			template: "src/index.html",
			filename: "index.html"
		})
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
	]
};
