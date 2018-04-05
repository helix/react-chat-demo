const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {test:/\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Chat Demo',
            template: './src/index.html'
        })
    ],

    devServer: {
        contentBase: path.resolve('public'),
        publicPath: '/'
    }
}
