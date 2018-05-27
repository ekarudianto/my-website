const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
    module: {
        rules: [
            {
              test: /\.(css|sass|scss)$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                      minimize: true,
                      sourceMap: false
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                      minimize: true,
                      sourceMap: false
                    }
                }],
              })
            },
        ],
    },
    plugins: [
      new UglifyJsPlugin({
        test: /\.js$/,
        cache: true,
        sourceMap: false,
        parallel: true,
        extractComments: true,
      }),
      new ExtractTextPlugin('style.css'),
    ],
});