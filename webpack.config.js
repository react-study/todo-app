const path = require('path');
const webpack = require('webpack');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

const HOST  = 'http://localhost';
const PORT  = 8080;
const URL   = HOST + ':' + PORT + '/';
const _PATH = path.resolve(__dirname, 'src');

module.exports = {
  HOST: HOST,
  PORT: PORT,
  URL: URL,
  watch: true,
  progress: true,
  devtool: 'cheap-module-eval-source-map',
  context: _PATH,
  entry: {
    index: [
      'webpack-hot-middleware/client?path=' + URL + '__webpack_hmr',
      'webpack/hot/only-dev-server',
      path.resolve(_PATH, 'main'),
    ]
  },
  output: {
    path: _PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [ _PATH ],
        exclude: [ /node_modules/ ],
        loader: 'react-hot!babel?cacheDirectory'
      }, {
        test: /\.css$/,
        loader: 'style!css?sourceMap'
      }
    ]
  },
  resolve: {
    root: [ _PATH ],
    extensions: [ '', '.js' ]
  },
  node: { fs: "empty" },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.EvalSourceMapDevToolPlugin(),
    new WebpackBrowserPlugin({
      url: HOST,
      port: PORT
    })
  ]
};