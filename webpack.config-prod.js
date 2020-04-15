const base = require('./webpack.config.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: 'index.[contenthash].css'
        }),
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                //\表示对点的转义：
                // 下边正则意思是如果文件是以.css结尾，
                //那么就使用style-loader,css-loader加载器
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
        ]
    }
};