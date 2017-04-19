var path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/src/main.js',
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
}