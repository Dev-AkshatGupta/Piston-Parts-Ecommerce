import { useState } from "react";
import "./Cart-Product-Big.css";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { useCartManager } from "../../../pages/contextsAndReducer/CartManagementProvider";
import { useAuthorization } from "../../../pages/contextsAndReducer/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  useCartData,
  useWishlistData,
} from "../../../pages/authenticationPages/dataFetchingAndAuthentication";

// Small product CArd
const Card = ({
  image,
  manufacturerName,
  name,
  price,
  oldPrice,
  stateChanger,
  state,
  id,
  wholeItem,
}) => {
  const { postCartData } = useCartData();
  const { postWishListData, deleteWishlistData } = useWishlistData();
  const { state: cartsState } = useCartManager();
  const addToWishlist = cartsState.wishlist.findIndex(
    (item) => item.name === wholeItem.name
  );
  const cartItemsInState = cartsState.cart.findIndex(
    (item) => item.name === wholeItem.name
  );
  const {
    authState: { token },
  } = useAuthorization();
  const navigate = useNavigate();
  return (
    <div className=" card-vertical border-r-3  padding-2 margin-top-1 ">
      <div className="card-product-image position-relative">
        <img src={image} className="border-r-3 " />

        {addToWishlist > -1 && (
          <div className="go-like active-liked ">
            <BsSuitHeartFill
              onClick={() => {
                deleteWishlistData(id);
              }}
            />
          </div>
        )}
        {addToWishlist === -1 && token ? (
          <div className="go-like ">
            <BsSuitHeartFill
              onClick={(e) => {
                postWishListData(wholeItem);
              }}
            />
          </div>
        ) : (
          <div className="go-like ">
            <BsSuitHeartFill
              onClick={(e) => {
                navigate("/logIn-page");
              }}
            />
          </div>
        )}
      </div>
      <div className="card-vertical-text">
        <h3 className="text-center margin-bottom-0">{name}</h3>
        <p className="sub-text margin-bottom-5 margin-top-0">
          {manufacturerName}
        </p>

        <p className="margin-0 flex-align-start">₹{price}</p>
        <p className="text-dark-grey margin-0">
          MRP:₹
          <span className="text-line-through ">{oldPrice}</span>
        </p>
      </div>
      <div className="card-element__bottom no-border">
        {cartItemsInState === -1 && token ? (
          <button
            className="btn btn-outline-pri margin-1"
            onClick={(e) => {
              postCartData(wholeItem);
            }}
          >
            Add to Cart
          </button>
        ) : (
          <Link to="/logIn-page" className="btn btn-outline-pri margin-1 text">
            Add to Cart
          </Link>
        )}
        {cartItemsInState > -1 && (
          <Link to="/cart-page" className="btn btn-outline-pri margin-1 text">
            Go to Cart
          </Link>
        )}
        <button
          className="btn btn-outline margin-1"
          onClick={() => {
            stateChanger(!state);
          }}
        >
          More Details
        </button>
      </div>
      <div className="flex-center-space-betw ">
        <span className="part-label-fulfilled">
          <TiTickOutline /> Fulfilled by
          <span className="text-accent">P</span>
        </span>
      </div>
    </div>
  );
};
export { Card };
