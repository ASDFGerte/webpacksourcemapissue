const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../webhost/public'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
