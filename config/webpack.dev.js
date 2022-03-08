const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const paths = require("./paths");

module.exports = merge(common, {
  devServer: {
    static: {
      directory: paths.build
    },
    host: "0.0.0.0",
    port: 3003,
    open: true,
    watchFiles: ["src/**/*"],
  },
});
