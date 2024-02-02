const { merge } = require('webpack-merge');
const common = require('../webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		port: 8000,
		static: './dist',
		hot: true,
	},
	devtool: 'source-map'
});
