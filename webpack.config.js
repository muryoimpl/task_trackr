var path    = require('path');
var webpack = require('webpack');
var merge   = require('webpack-merge');
var pkg     = require('./package.json');

var ROOT_PATH = path.resolve(__dirname);
var TARGET = process.env.npm_lifecycle_event;

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

var common = {
  entry: path.resolve(ROOT_PATH, 'main.jsx'),

  output: {
    path: path.resolve(ROOT_PATH, './'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
}

if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'eval-source-map',

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot-loader', 'babel?stage=1'],
          exclude: path.resolve(ROOT_PATH, 'node_modules')
        }
      ]
    },

    devServer: {
      colors: true,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      devFlagPlugin
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map',

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?stage=1'],
          exclude: path.resolve(ROOT_PATH, 'node_modules')
        }
      ]
    },
  });
}
