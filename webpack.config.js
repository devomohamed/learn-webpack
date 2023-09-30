const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'main.bundle.js',
    path: path.resolve(__dirname,'build')
  },
  plugins:[
    new HtmlWebpackPlugin()
  ],
  module:{
    rules:[
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
      // {
      //   test:/\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
    ]
  }
}