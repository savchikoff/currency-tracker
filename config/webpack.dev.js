const { merge } = require('webpack-merge');
const DotenvWebpackPlugin = require("dotenv-webpack");

const common = require('../webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		port: 3000,
		static: './dist',
		hot: true,
	},
	devtool: 'source-map',
	plugins: [
		new DotenvWebpackPlugin({
			path: "./.env",
		})
	]
});
