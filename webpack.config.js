const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    entry: resolve(__dirname, "src", "app", "index.tsx"),
    output: {
      publicPath: "/",
      path: resolve(__dirname, "dist"),
      filename: "[name].[contenthash].bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: resolve("public", "index.html") }),
    ],
    mode: env.mode,
    devServer:
      env.mode === "development"
        ? {
            port: 9000,
            open: true,
            historyApiFallback: true,
          }
        : undefined,
    resolve: {
      modules: ["node_modules", "./src"],
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};
