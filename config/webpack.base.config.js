const webpack = require('webpack');
const path = require('path');
const entryConfig = require('./entry.config');

module.exports = {
    entry: entryConfig,
    output: {
        path:path.resolve(__dirname,'../public'),
        filename: '[name].bundle.js'
    },
    // devtool:'eval-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            use: {
                loader: "vue-loader"
            }
        }]
    },
    plugins: [
        new webpack.BannerPlugin('左小胖666')
    ],
    resolve: {
        extensions: ['.js','.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}