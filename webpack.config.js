const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.index.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:  'babel-loader',
      },
      {
        test: /\.css$/,
        use:  'css-loader',
      },
    ],
  }
};