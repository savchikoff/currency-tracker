const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const common = require('../webpack.common');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		minimize: true,
		minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	}
});
