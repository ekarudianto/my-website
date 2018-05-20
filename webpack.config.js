const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WEB_TITLE = 'My website';

module.exports = {
  entry: `./index.js`,
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
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
          fallback: "style-loader",
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
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
