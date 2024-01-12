const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProduction) {
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
        ]
    }

    return config;
};

const plugins = () => {
    const list = [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            minify: {
                collapseWhitespace: isProduction,
            }
        }),
        new CleanWebpackPlugin()
    ];

    if (isProduction) {
        list.push(new BundleAnalyzerPlugin());
    }

    return list;
}

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js"
    },
    target: 'web',
    devServer: {
        port: 3000,
        static: "./dist",
        hot: isDevelopment
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@constants': path.resolve(__dirname, 'src/constants')
        }
    },
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: plugins()
}