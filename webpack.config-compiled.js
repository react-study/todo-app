'use strict';

var path = require('path');
var webpack = require('webpack');

var HOST = 'http://localhost';
var PORT = 8080;
var URL = HOST + ':' + PORT + '/';
var _PATH = path.resolve(__dirname, 'src');

module.exports = {
    HOST: HOST,
    PORT: PORT,
    URL: URL,
    watch: true,
    progress: true,
    devtool: 'cheap-module-eval-source-map',
    context: _PATH,
    entry: {
        index: ['webpack-hot-middleware/client?path=' + URL + '__webpack_hmr', 'webpack/hot/only-dev-server', path.resolve(_PATH, 'main')]
    },
    output: {
        path: _PATH,
        filename: 'bundle.js',
        publicPath: URL
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: [_PATH],
            exclude: [/node_modules/],
            loader: 'babel?cacheDirectory'
        }]
    },
    resolve: {
        root: [_PATH],
        extensions: ['', '.js']
    },
    node: { fs: "empty" },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin(), new webpack.EvalSourceMapDevToolPlugin()]
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(HOST, 'HOST', '/Users/pmh/study/react/1118/cash/webpack.config.js');

    __REACT_HOT_LOADER__.register(PORT, 'PORT', '/Users/pmh/study/react/1118/cash/webpack.config.js');

    __REACT_HOT_LOADER__.register(URL, 'URL', '/Users/pmh/study/react/1118/cash/webpack.config.js');

    __REACT_HOT_LOADER__.register(_PATH, '_PATH', '/Users/pmh/study/react/1118/cash/webpack.config.js');
}();

;

//# sourceMappingURL=webpack.config-compiled.js.map