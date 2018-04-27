let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname + "/src",
	entry: ["./js/controls.js", "index.js"],

	output: {
		filename: "bundle.js",
		path: __dirname + "/dist",
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
	plugins: [new HtmlWebpackPlugin({
		template: './src/index.html'
	})]
};
