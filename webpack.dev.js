const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    liveReload: true,
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
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      generateStatsFile: false,
    }),
  ],
});
