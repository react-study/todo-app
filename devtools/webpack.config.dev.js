require('dotenv').load();

var path = require('path');
var webpack = require('webpack');

var DEV_URL = process.env.DEV_URL;
var DEV_PATH   = path.resolve(__dirname, '../src');

console.log(DEV_URL, ' : DEV_URL');

module.exports = {
    watch: true,
    progress: true,
    devtool: 'cheap-module-eval-source-map',
    context: DEV_PATH,
    entry: {
        index: [
            'webpack-hot-middleware/client?path=' + DEV_URL + '__webpack_hmr',
            'webpack/hot/only-dev-server',
            path.resolve(DEV_PATH, 'main')
        ]
    },
    output: {
        path: DEV_PATH,
        filename: 'bundle.js',
        publicPath: DEV_URL
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [ DEV_PATH ],
                exclude: [ /node_modules/ ],
                loader: 'react-hot!babel?cacheDirectory'
            }
        ]
    },
    resolve: {
        root: [ DEV_PATH ],
        extensions: [ '', '.js' ]
    },
    node: { fs: "empty" },
    plugins: [

        // 기동시의 환경변수를 js 에서도 사용할 수 있게 한다.
        new webpack.EnvironmentPlugin([
            "NODE_ENV"
        ]),

        // 자주 쓰는 모듈 순서로 오더링
        new webpack.optimize.OccurenceOrderPlugin(),

        // module의 변화를 감지하여 브라우저상에 해당 모듈만 replace해준다.
        new webpack.HotModuleReplacementPlugin(),

        // 에러 발생시 번들링을 중단하면서도 웹팩 실행을 중지시키지는 않게 해준다.
        new webpack.NoErrorsPlugin()
    ]
}
