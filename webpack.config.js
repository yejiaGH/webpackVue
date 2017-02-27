var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve('./dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}