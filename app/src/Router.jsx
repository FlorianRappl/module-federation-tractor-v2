import React from "react";
import { useHistory } from "./useHistory";

const HomePage = window.getComponent("explore/HomePage");
const StoresPage = window.getComponent("explore/StoresPage");
const CategoryPage = window.getComponent("explore/CategoryPage");
const CartPage = window.getComponent("checkout/CartPage");
const Checkout = window.getComponent("checkout/Checkout");
const Thanks = window.getComponent("checkout/Thanks");
const ProductPage = window.getComponent("decide/ProductPage");

const Router = () => {
  const path = useHistory();

  switch (path) {
    case "/":
      return <HomePage />;
    case "/stores":
      return <StoresPage />;
    case "/checkout/cart":
      return <CartPage />;
    case "/checkout/checkout":
      return <Checkout />;
    case "/checkout/thanks":
      return <Thanks />;
    case "/products":
      return <CategoryPage />;
  }

  if (path.startsWith("/product/")) {
    const id = path.split("/")[2];
    return <ProductPage id={id} />;
  } else if (path.startsWith("/products/")) {
    const category = path.split("/")[2];
    return <CategoryPage category={category} />;
  }

  return null;
};

export default Router;
