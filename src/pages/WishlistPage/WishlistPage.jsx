import React from "react";
import "./wishlist.css";
import {
  NavBar,
  Footer,
  WishlistCard,
} from "components";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
function WishlistPage() {
  const wishlist=useSelector(state=>state.operations.wishlist);
  return (
    <div>
      
      <NavBar />
      <div className="banner-upper-empty"></div>
      <div className="products-main">
        {wishlist?.length < 1 && (
          <div className="height-100vh flex-center">
            <div className="flex-center ">
              <span className="text-3">There is nothing in the Wishlist</span>
              <Link
                to="/products-page"
                className="btn btn-outline-pri text margin-l-1"
              >
                Go to products page
              </Link>
            </div>
          </div>
        )}
        {wishlist?.length > 0 &&
        wishlist.map((item) => (
            <WishlistCard
              image={item.image.src}
              key={item._id}
              manufacturerName={item.manufacturerName}
              price={item.price.actualPrice}
              name={item.name}
              oldPrice={item.price.previousPrice}
              id={item._id}
              obj={item}
            ></WishlistCard>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export { WishlistPage };
