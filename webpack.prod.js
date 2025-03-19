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
              use: [MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
        ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
    ],
});
