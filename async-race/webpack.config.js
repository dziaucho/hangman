const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EslintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/script.ts"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  resolve: {
    alias: {
      img: path.join(__dirname, "src", "components", "img"),
    },
    extensions: [".ts", ".js"],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/components/img"),
          to: path.resolve(__dirname, "./dist/components/img"),
          force: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: "aSyNc RaCe",
    }),

    new CleanWebpackPlugin(),

    new EslintPlugin({ extensions: ["ts"] }),
  ],

  devServer: {
    open: true,
    host: "localhost",
  },
};
