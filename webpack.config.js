var webpack = require("webpack");
var path = require('path');

var dist = path.resolve(__dirname, "dist");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: dist,
    filename: "javascript/app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
