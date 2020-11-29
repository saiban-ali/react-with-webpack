const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common(), {
	mode: 'development',
	devtool: false,
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
});
