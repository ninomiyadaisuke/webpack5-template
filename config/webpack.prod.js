const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const paths = require("./paths")

module.exports = merge(common, {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: paths.srcImages,
          to: paths.buildImages
        }
      ]
    }),
    new CleanWebpackPlugin(),
  ],
})