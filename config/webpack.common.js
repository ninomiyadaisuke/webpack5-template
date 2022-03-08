const paths = require("./paths")
const globule = require("globule");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const app = {
  entry: paths.src,
  output: {
    path: paths.build,
    filename: "./js/[name].js",
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};

const templates = globule.find("./src/templates/*.html");
templates.forEach((template) => {
  const fileName = template.replace("./src/templates/", "");
  const chunk = fileName.slice(0,-5)
  app.plugins.push(
    new HtmlWebpackPlugin({
      chunks: [chunk],
      filename: `${fileName}`,
      template: template,
    })
  );
});

module.exports = app;
