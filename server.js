const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config.js');

const compiler = webpack(config);

const serverOptions = {
  contentBase: config.URL,
  progress: true,
  hot: true,
  watch: true,
  verbose: true,
  publicPath: config.URL,
  headers: {'Access-Control-Allow-Origin': '*'},
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

const app = new express();
app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(config.context));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(config.context, 'index.html'))
});

app.listen(config.PORT, function onAppListening(err) {
  if(err) {
    console.error(err);
  } else {
    console.info('Webpack development server progress... %s', config.URL);
  }
});
