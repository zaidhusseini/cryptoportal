const path = require('path');

const APP_SRC = path.join(__dirname, '/client/src/');
const BUILD_SRC = path.join(__dirname, '/client/dist/');

const config = {
  entry: APP_SRC + 'index.jsx',
  output: {
    path: BUILD_SRC,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: APP_SRC,
        exclude: /node_modules/ ,
        loaders: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['css-loader', 'style-loader']
      }
    ]
  }

}


module.exports = config;