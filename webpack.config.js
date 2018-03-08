var webpack = require("webpack");
var path = require("path");

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
      },
      {
        test: /\.html$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, "src")
    }
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 9002
  }
};
