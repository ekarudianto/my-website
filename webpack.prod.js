const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  module: {
      rules: [
          {
            test: /\.(css|sass|scss)$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ],
          },
      ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
});
