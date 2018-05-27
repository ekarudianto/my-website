const HTMLWebpackPlugin = require('html-webpack-plugin');

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
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html',
      title: WEB_TITLE,
      inject: true,
      hash: true,
    }),
  ],
};
