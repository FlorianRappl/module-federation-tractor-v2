import { federation } from '@module-federation/vite';

export default {
  base: process.env.BASE_URL || "http://localhost:6003/",
  build: {
    target: "esnext",
  },
  plugins: [
    federation({
      name: "decide",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductPage": "./src/ProductPage.jsx",
      },
      remotes: {},
      shared: ["react"],
    }),
  ],
};
