let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname + "/src",
	entry: ["./js/controls.js"],
	output: {
		path: path.resolve(__dirname + "/dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: 'html-webpack-plugin',
			}
		],
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
		})
	]
};
