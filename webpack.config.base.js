const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: "index.html",
            template: "./assets/admin.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        //将Sass编译成CSS：
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass")
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader", "css-loader", "stylus-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    }
};