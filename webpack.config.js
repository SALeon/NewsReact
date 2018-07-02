const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template: "index.html",
    filename: "index.html"
});

module.exports = {
    devtool: 'source-map',
    entry: ['./src/index.js'],
    devServer: {
        proxy: [{
            path: '/api/',
            target: 'http://localhost:3001'
        }],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
        ]
    },
    plugins: [htmlPlugin]
};
