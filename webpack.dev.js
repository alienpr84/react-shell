const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	target: 'web',
	devServer: {
		hot: true,
		port: 4001,
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: resolve(__dirname, 'public', 'index.html'),
		}),
		new ReactRefreshWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						[
							'@babel/preset-react',
							{
								runtime: 'automatic',
							},
						],
					],
				},
			},
		],
	},
});
