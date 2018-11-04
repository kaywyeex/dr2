const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

const appDir = path.resolve('./static/bundles/');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  target: isProd ? 'node' : 'web',
  output: {
    path: appDir,
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new BundleTracker({
      filename: 'webpack-stats.json',
    }),
  ],
};
