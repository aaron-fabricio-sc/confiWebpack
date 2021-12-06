const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/index.js",
    /* react: "./src/index_react.js",
    ts: "./src/index_ts.js", */
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@stylus": path.resolve(__dirname, "./src/stylus"),
    },
  },
  mode: "production",

  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.pug/i,
        use: {
          loader: "pug-loader",
        },
      },
      {
        test: /\.css|.scss|.styl/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|svg|webp|gif)$/i,
        use: ["file-loader?name=assets/[name].[ext]", "image-webpack-loader"],
        //type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.pug"),
      filename: "index.html",
      chunks: ["app"],
      hash: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/assets/",
          to: "./assets",
        },
      ],
    }),

    /* new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.pug"),
      filename: "react.html",
      chunks: ["react"],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.pug"),
      filename: "ts.html",
      chunks: ["ts"],
      hash: true,
    }), */
    new MiniCssExtractPlugin({
      filename: "./styles/[name].[contenthash].css",
      /*  chunkFilename: "app", */
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
  ],

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
