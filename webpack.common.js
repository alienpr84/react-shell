const { join, resolve } = require('path');

module.exports = {
	entry: resolve(__dirname, 'src', 'index.jsx'),
	resolve: {
		modules: [__dirname, 'src', 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.png|jpg|svg|gif|ico$/i,
				type: 'asset/resource',
				generator: {
					filename: join('images', '[contenthash][ext][query]'),
				},
			},
		],
	},
}