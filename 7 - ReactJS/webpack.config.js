/**
 * Created by maurice on 4/26/2016.
 */

module.exports = {
    entry: './src/index.js',
    output: {
        path: './public/js',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loaders: ['babel-loader']
            }
        ]
    }
};