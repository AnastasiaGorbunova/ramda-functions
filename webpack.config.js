const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [ './src/app.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	mode: process.env.NODE_ENV,
	devServer: {
		contentBase: path.join(__dirname, './'),
		port: 9000,
		hot: true,
		open: true,
		historyApiFallback: true
	},
	resolve: {
		modules: ['src', 'node_modules']
	},
	node: {
		fs: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(js)$/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					}
				},
			}
		]
	}
};
