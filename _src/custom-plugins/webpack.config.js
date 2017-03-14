var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        datePicker: path.resolve(__dirname, './automile-datepicker-plugin/src/entry.js'),
        select: path.resolve(__dirname, './automile-select-plugin/src/entry.js'),
        vendor: 'classnames'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: 'babel-loader',
            include: [
                path.resolve(__dirname, './automile-datepicker-plugin'),
                path.resolve(__dirname, './automile-select-plugin'),
                path.resolve(__dirname, './../../node_modules/preact-compat')
            ],
            query: {
                cacheDirectory: true,
                presets: ['env', 'react', 'stage-2']
            }
        }]
    },
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    externals: {
        moment: 'moment',
        tether: 'Tether'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ compress: false }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};
