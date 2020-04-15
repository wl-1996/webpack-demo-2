const base = require('./webpack.config.base');

module.exports = {
    ...base,
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                //\表示对点的转义：
                // 下边正则意思是如果文件是以.css结尾，
                //那么就使用style-loader,css-loader加载器
                //css-loader作用是将css内容放到js文件里；
                //style-loader作用是将css-loader读到的东西变为style标签放到head里
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
};