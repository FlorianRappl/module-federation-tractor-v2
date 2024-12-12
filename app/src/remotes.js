import { lazy } from "react";
import {
  registerRemotes,
  loadRemote,
} from "@module-federation/enhanced/runtime";

registerRemotes([
  {
    entry: process.env.DECIDE_URL,
    name: "decide",
    type: "module",
  },
  {
    entry: process.env.CHECKOUT_URL,
    name: "checkout",
    type: "global",
  },
  {
    entry: process.env.EXPLORE_URL,
    name: "explore",
    type: "global",
  },
]);

window.getComponent = (id) => lazy(() => loadRemote(id));
