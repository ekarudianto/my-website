const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const WEB_TITLE = 'Eka Rudianto | My personal website';

module.exports = {
  mode: 'none',
  entry: `./index.js`,
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
    },
  },
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
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      title: WEB_TITLE,
      inject: true,
      hash: true,
    }),
  ],
};
