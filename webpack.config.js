const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template: "index.html",
    filename: "index.html"
});

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [htmlPlugin]
};
