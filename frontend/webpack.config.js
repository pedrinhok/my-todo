const extract = require("extract-text-webpack-plugin")
const css = new extract("./bundle.css")

module.exports = {
  entry: "./source/index.jsx",
  output: {
    filename: "./bundle.js",
    path: __dirname + "/public",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      modules: __dirname + "/node_modules"
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "minify"]
        }
      },
      {
        test: /\.css$/,
        loader: css.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "./assets/fonts/[hash].[ext]"
        }
      }
    ]
  },
  plugins: [css]
}
