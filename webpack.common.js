const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
            '@utils': path.resolve(__dirname, 'src/utils')
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
                test: /\.(jpg|jpeg|png|svg)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            minify: {
                collapseWhitespace: true,
            },
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
    ],
};
