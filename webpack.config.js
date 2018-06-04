
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, '@webcomponents'),
		]
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{ loader: 'babel-loader' },
					{ loader: 'polymer-webpack-loader' }
				]
			},
			{

				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 1820
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.ejs'),
			inject: false
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'node_modules/@webcomponents/webcomponentsjs/*.js'),
				to: '@webcomponents/webcomponentsjs/[name].[ext]'
			},
			{
				from: path.resolve(__dirname, 'node_modules/@webcomponents/webcomponentsjs/*/*.js'),
				to: '@webcomponents/webcomponentsjs/bundles/[name].[ext]'
			}
		])
	]
};
