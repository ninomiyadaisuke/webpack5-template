const path = require('path')
const WebpackWatchedGlobEntries = require("webpack-watched-glob-entries-plugin");

const entries = WebpackWatchedGlobEntries.getEntries([
  path.resolve(__dirname, "../src/js/*"),
]);


module.exports = {
  src: entries,
  build: path.resolve(__dirname, '../dist'),
  buildImages: `${path.resolve(__dirname, "../dist")}/images/`,
  srcImages: `${path.resolve(__dirname, "../src")}/images/`,
}