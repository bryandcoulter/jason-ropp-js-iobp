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
			template: "./src/components/edit-user.html",
			filename: "./edit-user.html"
		}),
		new HtmlWebPackPlugin({
			template: "./src/components/new-user.html",
			filename: "./new-user.html"
		}),
		new HtmlWebPackPlugin({
			template: "./src/components/user-profile.html",
			filename: "./user-profile.html"
		}),
		new HtmlWebPackPlugin({
			template: "./src/components/users-list.html",
			filename: "./users-list.html"
		}),
		new HtmlWebPackPlugin({
			template: "./src/components/nav-bar.html",
			filename: "./nav-bar.html"
		}),
	]
};
