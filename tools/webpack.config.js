var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../components')
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules'
        ]
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  }
};
