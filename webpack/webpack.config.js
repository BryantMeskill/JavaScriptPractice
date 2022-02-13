const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  //allows you to track down bug to source file
  devtool: "inline-source-map",
  //tells 'webpack-dev-server' to serve files from the dist directory on localhost:8080

  devServer: {
    static: "./dist",
  },
  //automatically adds bundles to a newly generated HTML file
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    filename: "bundle.js",
    //dynamically generating bundle names
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    //removes files not in use automatically
    clean: true,
  },
  module: {
    rules: [
      //loading css files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //loading image files
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      //loading font files
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      //loading misc data files
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
    ],
  },
};
