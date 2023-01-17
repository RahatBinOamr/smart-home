import React, { useState } from "react";
import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);
const Main = () => {
  const { products, initialCart } = useLoaderData();

  const [cart, setCart] = useState(initialCart);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Main;
/* https://github.com/shakilahmedatik/smart-home-complete */
