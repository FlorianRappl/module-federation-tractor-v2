const rspack = require("@rspack/core");
const path = require("path");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/rspack");

const checkoutUrl = process.env.BASE_URL ? `${process.env.BASE_URL}checkout/remoteEntry.js` : '';
const decideUrl = process.env.BASE_URL ? `${process.env.BASE_URL}decide/assets/remoteEntry.js` : '';
const exploreUrl = process.env.BASE_URL ? `${process.env.BASE_URL}explore/remoteEntry.js` : '';

module.exports = {
  output: {
    uniqueName: "app",
    publicPath: "auto",
  },
  devServer: {
    port: 1234,
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        type: "asset",
      },
      {
        test: /\.png$/,
        type: "asset",
      },
      {
        test: /\.jsx$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
            },
          },
        },
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      filename: "remoteEntry.js",
      exposes: {},
      remotes: {},
      shared: ["react"],
    }),
    new rspack.DefinePlugin({
      "process.env.CHECKOUT_URL": JSON.stringify(checkoutUrl || "http://localhost:6002/remoteEntry.js"),
      "process.env.DECIDE_URL": JSON.stringify(decideUrl || "http://localhost:6003/assets/remoteEntry.js"),
      "process.env.EXPLORE_URL": JSON.stringify(exploreUrl || "http://localhost:6001/remoteEntry.js"),
    }),
    new rspack.HtmlRspackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};
