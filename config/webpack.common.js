const path = require('path');
const webpack = require('webpack');
const dotEnv = require('dotenv-flow');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
	return {
		entry: path.resolve(__dirname, '../src/index.js'),
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, '../src/index.html'),
			}),
			new webpack.DefinePlugin({
				'process.env': JSON.stringify(
					dotEnv.config({ node_env: env.ENVIRONMENT }).parsed
				),
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
