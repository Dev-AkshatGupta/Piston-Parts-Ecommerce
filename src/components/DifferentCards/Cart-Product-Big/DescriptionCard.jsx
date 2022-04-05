import { useState } from "react";
import "./Cart-Product-Big.css";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { useCartManager } from "../../../pages/contextsAndReducer/CartManagementProvider";
import { Link } from "react-router-dom";
import {
  useCartData,
  useWishlistData,
} from "../../../pages/authenticationPages/dataFetchingAndAuthentication";

function CardProductBig({
  image,
  manufacturerName,
  name,
  price,
  availability,
  stateChanger,
  state,
  id,
  wholeItem,
}) {
  const { postCartData } = useCartData();
  const { postWishListData, deleteWishlistData } = useWishlistData();
  const { state: cartsState } = useCartManager();
  const addToWishlist = cartsState.wishlist.findIndex(
    (item) => item.name === wholeItem.name
  );
  const cartItemsInState = cartsState.cart.findIndex(
    (item) => item.name === wholeItem.name
  );
  return (
    <>
      <div className="lightbox-blanket">
        <div className="pop-up-container">
          <div className="pop-up-container-vertical">
            <div className="pop-up-wrapper">
              <div className="go-back">
                <i
                  className="fa fa-arrow-left"
                  onClick={() => {
                    stateChanger(!state);
                  }}
                ></i>
              </div>

              {addToWishlist > -1 && (
                <div className="go-like active-liked ">
                  <BsSuitHeartFill
                    onClick={() => {
                      deleteWishlistData(id);
                    }}
                  />
                </div>
              )}
              {addToWishlist === -1 && (
                <div className="go-like ">
                  <BsSuitHeartFill
                    onClick={(e) => {
                      postWishListData(wholeItem);
                    }}
                  />
                </div>
              )}
              <div className="product-details">
                <div className="product-left">
                  <div className="product-info">
                    <div className="product-manufacturer">{name}</div>
                    <div className="product-title">{manufacturerName}</div>
                    <div className="product-price">
                      ₹{price}
                      <span className="product-price-cents">.00</span>
                    </div>
                  </div>
                  <div className="product-image">
                    <img src={image} />
                  </div>
                </div>
                <div className="product-right">
                  <div className="product-description text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, iusto in. Aliquam voluptas, libero distinctio iure
                    culpa, doloribus laborum deserunt nobis aperiam corrupti
                    adipisci magni ipsam cumque maiores ab officia.
                  </div>
                  <div className="product-available text">
                    {availability && <>In stock.</>}
                    {!availability && <>Out of stock.</>}
                    <span className="product-extended">
                      <span className="link-btn">Buy Extended Warranty</span>
                    </span>
                  </div>
                  <div className="product-rating text">
                    <i className="fa fa-star rating" star-data="1"></i>
                    <i className="fa fa-star rating" star-data="2"></i>
                    <i className="fa fa-star rating" star-data="3"></i>
                    <i className="fa fa-star" star-data="4"></i>
                    <i className="fa fa-star" star-data="5"></i>
                    <div className="product-rating-details">
                      (3.1 - <span className="rating-count">12</span> reviews)
                    </div>
                  </div>
                  <div className="product-quantity">
                    <label
                      for="product-quantity-input"
                      className="product-quantity-label"
                    >
                      Quantity
                    </label>
                    <div className="product-quantity-subtract">
                      <i className="fa fa-chevron-left"></i>
                    </div>
                    <div>
                      <input
                        type="text"
                        id="product-quantity-input"
                        placeholder="0"
                        value="0"
                      />
                    </div>
                    <div className="product-quantity-add">
                      <i className="fa fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div className="product-bottom">
                  <div className="product-checkout">
                    Total Price
                    <div className="product-checkout-total">
                      <i className="fa fa-usd"></i>
                      <div className="product-checkout-total-amount">0.00</div>
                    </div>
                  </div>
                  <div className="product-checkout-actions">
                    {cartItemsInState === -1 && (
                      <button
                        className="add-to-cart btn btn-outline text"
                        onClick={(e) => {
                          postCartData(wholeItem);
                        }}
                      >
                        Add to cart
                      </button>
                    )}
                    {cartItemsInState > -1 && (
                      <Link
                        to="/cart-page"
                        className="add-to-cart btn btn-outline text"
                      >
                        Go to Cart
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { CardProductBig };
