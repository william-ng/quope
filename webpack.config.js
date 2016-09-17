var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './client/index.js',
	output: {
		filename: 'bundle.js',
		path: './web/js'
	},
	module: {
		loaders: [
			{
				include: /client/,
				test: /.jsx?$/,
				loader: 'babel-loader', 
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};