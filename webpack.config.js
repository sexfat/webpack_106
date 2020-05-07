const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production', //開發模式
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: 'dist',
    open  : true,
    port: 3000
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, ],
  },
  plugins: [
    //html 5 plugin
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};