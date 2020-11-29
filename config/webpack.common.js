const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
	return {
		entry: path.resolve(__dirname, '../src/index.js'),
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, '../src/index.html'),
			}),
		],
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.html/,
					use: {
						loader: 'html-loader',
					},
				},
				{
					test: /\.(svg|png|jpg|jpeg|gif)$/,
					use: {
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets',
						},
					},
				},
			],
		},
		resolve: {
			extensions: ['.js', '.jsx'],
		},
	};
};
