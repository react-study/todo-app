var express = require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config.js');

var compiler = webpack(config);

var serverOptions = {
    contentBase: config.URL,
    progress: true,
    hot: true,
    watch: true,
    verbose: true,
    publicPath: config.URL,
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

app.listen(config.PORT, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('Webpack development server progress... %s', config.URL);
    }
});
