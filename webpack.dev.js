const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    overlay: true,
    contentBase: './dist',
    hot: true,
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
