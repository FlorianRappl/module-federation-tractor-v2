const { ModuleFederationPlugin } = require("@module-federation/enhanced/rspack");

module.exports = {
  output: {
    uniqueName: "checkout",
    publicPath: "auto",
  },
  devServer: {
    port: 6002,
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
      name: "checkout",
      filename: "remoteEntry.js",
      exposes: {
        "./CartPage": "./src/CartPage.jsx",
        "./Checkout": "./src/Checkout.jsx",
        "./Thanks": "./src/Thanks.jsx",
        "./AddToCart": "./src/AddToCart.jsx",
        "./MiniCart": "./src/MiniCart.jsx",
      },
      shared: ["react", "canvas-confetti"],
    }),
  ],
};
