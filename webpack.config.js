const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const PATH = path.resolve(__dirname, 'src');

module.exports = {
  context: PATH,
  devtool: 'cheap-e-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(PATH, 'entry')
  ],
  output: {
    publicPath: 'http://localhost:8080',
    path: PATH,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EvalSourceMapDevToolPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new WebpackBrowserPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/
    }]
  },
  devServer: {
    hot: true
  }
};