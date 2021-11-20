/* eslint-disable react-hooks/rules-of-hooks */
const { useBabelRc, override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    "@styles": path.resolve(__dirname, "src/styles"),
    "@components": path.resolve(__dirname, "src/componenets"),
    "@store": path.resolve(__dirname, "src/store"),
    "@pages": path.resolve(__dirname, "src/pages"),
  })
);
