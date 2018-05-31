const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
	// Is this the correct entry point
	entry: './src/index.js',
	// Well at least output is working properly... I think
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
		rules: [
			// My guess is I need this for any js files outside of the components, if I had them
      {
        test: /\.js$/,
        use: 'babel-loader'
			},
			// I also don't have any css components right now.ssooooooo
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.html$/,
        // Is this path style correct?
        // include: path.resolve(__dirname, './*.html'),
				// Is this format correct?
				// Currently things are entering through index.ejs so I don't think I need to exclude index.html anymore
        // exclude: [
          // path.resolve(__dirname, './index.html'),
          // Does this need a ./ at the beginning?
          // path.resolve(__dirname, 'pages/*.html'),
        // ],
        use: [
          // Chained loaders are applied last to first
          // So how is html-loader included? Is that automatic while babel-loader is not?
          { loader: 'babel-loader' },
          { loader: 'polymer-webpack-loader' }
				]
				// These options caused an error for having options in the wrong place, maybe because I added a couple of loaders instead of just one
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
		// It is now entering through index.ejs
		// Is working properly when copywebpackplugin is being used
		new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.ejs'),
      inject: false
      // This means we have to have an index.ejs template file
      // in our src directory. It will output a file we can use
      // in the dev server, I guess.
    }),
		// Use this for webcomponent polyfills later
		new CopyWebpackPlugin([
      // { from: 'src/*/*.html', to: '[name].[ext]' },
      // { from: 'src/index.html', to: '[name].[ext]' },
      { from: 'node_modules/@banno/polymer/polymer.html', to: '[name].[ext]' },
		]),
		new WriteFilePlugin()
    // // Does the same thing as copywebpackplugin but for webpack-dev-server
    // new WriteFilePlugin(),
  ],

  // Anything that wp doesn't generate on its own gets served out of dist
  devServer: {
    contentBase: 'dist'
  }
};
