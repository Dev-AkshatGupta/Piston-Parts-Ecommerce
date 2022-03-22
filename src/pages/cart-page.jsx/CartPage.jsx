import React from "react";
import "./cart-page.css";
import { NavBar, Footer, useCartManager } from "./importsAndExports";

function CartPage() {
  const { state } = useCartManager();

  return (
    <div>
      <NavBar />
      <div className="banner-upper-empty"></div>

      <Footer />
    </div>
  );
}

export { CartPage };
