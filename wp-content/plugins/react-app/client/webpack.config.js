const path = require("path");

module.exports = {
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "../wp-content/plugins/react-app/client/dist/images",
              outputPath: "images/"
            }
          }
        ]
      }
    ]
  }
};
