import React from "react";
import "./wishlist.css";
import {
  NavBar,
  Footer,
  useCartManager,
  WishlistCard,
} from "./importsAndExports";

function WishlistPage() {
  const { state } = useCartManager();
  return (
    <div>
      <NavBar />
      <div className="banner-upper-empty"></div>
      <div className="products-main">
        {state.wishlist.length < 1 && (
          <div className="flex-center ">Thehre is nothing in the cart</div>
        )}
        {state.wishlist.length > 0 &&
          state.wishlist.map((item) => <WishlistCard></WishlistCard>)}
      </div>

      <Footer />
    </div>
  );
}

export { WishlistPage };
