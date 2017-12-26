const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  target: 'node',
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'node-style-loader',
            options: {
              hmr: false,
              singleton: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};