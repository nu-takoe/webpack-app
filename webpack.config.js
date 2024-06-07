const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
              { from: "./public/favicon.ico", to: "./dist" },
            ],
          }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            '...',
            new CssMinimizerPlugin()
        ],
    },
};