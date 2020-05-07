const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode : 'development',//開發模式
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'main.js'
  }
};