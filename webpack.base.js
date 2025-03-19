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
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]',
        },
      }
    ],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      title: WEB_TITLE,
      inject: true,
      hash: true,
    }),
  ],
};
