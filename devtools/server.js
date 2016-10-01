require('dotenv').load();

var express = require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config.dev.js');

var PORT = process.env.DEV_PORT || 8080;
var URL = process.env.DEV_URL || 'http://localhost:8080/';
var compiler = webpack(config);

var serverOptions = {
    contentBase: URL,
    progress: true,
    hot: true,
    watch: true,
    verbose: true,
    publicPath: config.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    stats: {
        cached: true,
        cachedAssets: true,
        chunks: true,
        chunkModules: false,
        colors: true,
        hash: false,
        reasons: true,
        timings: true,
        version: false
    }
};

var app = new express();
app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(config.context));

app.listen(PORT, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('Webpack development server progress... %s', config.output.publicPath);
    }
});
