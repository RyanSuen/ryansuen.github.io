/**
 * Created by ryan on 16/6/27.
 */
var webpack = require('webpack'),
    path = require('path'),
    env = 'dev';    //'production'

var config = {
    entry: {
        'index': path.resolve(__dirname, 'build/component/container/Index')
    },
    output: {
        path: path.resolve(__dirname, 'js/part'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: [ 'es2015', 'react' ]
                }
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css!less'
            }
        ]
    },
    plugins: []
};

if( 'dev' === env ) {
    config.devtool = 'source-map';
} else if( 'production' ) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        })
    );
}

module.exports = config;

