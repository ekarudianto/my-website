const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    overlay: true,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
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
