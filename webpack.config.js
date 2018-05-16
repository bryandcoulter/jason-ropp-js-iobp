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
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new HtmlWebPackPlugin({
			template: "./src/edit-user.html",
			filename: "./edit-user.html"
		}),
		new HtmlWebPackPlugin({
			template: "./src/new-user.html",
			filename: "./new-user.html"
		}),
		new HtmlWebPackPlugin({
			template: "./src/user-profile.html",
			filename: "./user-profile.html"
		}),
		new HtmlWebPackPlugin({
			template: "./src/users-list.html",
			filename: "./users-list.html"
		}),
	]
};
