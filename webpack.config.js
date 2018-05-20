const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WEB_TITLE = 'Eka Rudianto | My personal website';

module.exports = {
  entry: `./index.js`,
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
      'assets': `${__dirname}/assets`
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
          }, {
              loader: 'sass-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
          }],
        })
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js$/,
      cache: true,
      sourceMap: true,
    }),
    new ExtractTextPlugin('style.css'),
    new HTMLWebpackPlugin({
      template: 'index.html',
      title: WEB_TITLE,
      inject: true,
      hash: true,
    }),
  ],
};
