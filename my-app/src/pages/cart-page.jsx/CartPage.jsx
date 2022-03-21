import React from "react";
import "./cart-page.css";
import { NavBar, Footer, useCartManager } from "./importsAndExports";

function CartPage() {
  const { state } = useCartManager();

  return (
    <div>
      <NavBar />
      <div className="banner-upper-empty"></div>
      {state.wishlist.length < 1 && <div className="flex-center "></div>}
      {state.wishlist.length > 0 &&
        state.wishlist.map((item) => <div>{item.name}</div>)}
      <Footer />
    </div>
  );
}

export { CartPage };
