const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
        {
          test: /\.(css|sass|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }, 
    ],
  },
});