const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'public', 'index.html'),
			favicon: resolve(__dirname, 'public', 'favicon.ico'),
			filename: 'index.html',
			inject: 'body',
		}),
	],
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.[contenthash].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
		],
	},
});
