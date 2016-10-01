require('dotenv').load();

var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('webpack-uglify-js-plugin');

var ROOT_PATH = path.resolve(__dirname, '../')
var DEV_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    watch: false,
    context: DEV_PATH,
    entry: {
        index: path.join(DEV_PATH, 'main')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [ /node_modules/ ],
            loader: 'babel'
        }]
    },
    resolve: {
		root: [ DEV_PATH ],
        extensions: [ '', '.js' ]
    },
    node: { fs: "empty" },
    plugins: [
        new CleanWebpackPlugin([ BUILD_PATH ], { root: ROOT_PATH }),
        new webpack.EnvironmentPlugin([ "NODE_ENV" ]),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            debug: true,
            minimize: true,
            sourceMap: false,
            compressor: { warnings: false }
        })
    ]
}
