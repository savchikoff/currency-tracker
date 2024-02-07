const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotenvWebpackPlugin = require("dotenv-webpack");

const path = require('path');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@constants': path.resolve(__dirname, 'src/constants'),
			'@helpers': path.resolve(__dirname, 'src/helpers'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@styled': path.resolve(__dirname, 'src/styled'),
			'@GlobalStyles': path.resolve(__dirname, 'src/GlobalStyles'),
			'@theme': path.resolve(__dirname, 'src/theme')
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(jpg|jpeg|png|svg|gif|ico)$/,
				type: 'asset/resource',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			minify: {
				collapseWhitespace: true,
			},
			favicon: "./src/assets/favicon.ico"
		}),
		new CleanWebpackPlugin(),
		new DotenvWebpackPlugin({
			systemvars: true
		})
	],
};
