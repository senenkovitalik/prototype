const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
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
            presets: ['babel-preset-react', 'babel-preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};