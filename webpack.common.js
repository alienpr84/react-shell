const { join } = require('path');

module.exports = {
	entry: join(__dirname, 'src', 'index.jsx'),
	resolve: {
		modules: [__dirname, 'src', 'node_modules'],
		extensions: ['*', '.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.png|jpg|svg|gif|ico$/,
				use: ['file-loader']
			},
		],
	},
}