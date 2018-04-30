let HtmlWebpackPlugin = (require('html-webpack-plugin'))();
let path = require('path');


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
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
