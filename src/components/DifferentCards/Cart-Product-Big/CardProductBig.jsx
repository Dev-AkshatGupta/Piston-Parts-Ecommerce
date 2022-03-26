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
        {addToWishlist === -1 && (
          <div className="go-like ">
            <BsSuitHeartFill
              onClick={(e) => {
                postWishListData(wholeItem);
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

        <p
          className="margin-0"
          style={{ margin: "0", alignSelf: "flex-start" }}
        >
          ₹{price}
        </p>
        <p className="text-dark-grey margin-0" style={{ margin: "0" }}>
          MRP:₹
          <span className="text-line-through ">{oldPrice}</span>
        </p>
      </div>
      <div className="card-element__bottom no-border">
        {cartItemsInState === -1 && (
          <button
            className="btn btn-outline-pri margin-1"
            onClick={(e) => {
              postCartData(wholeItem);
            }}
          >
            Add to Cart
          </button>
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
// Descriptive Big product card
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

function BothCard({
  image,
  manufacturerName,
  name,
  price,
  oldPrice,
  availability,

  id,
  wholeItem,
}) {
  const [view, setView] = useState(true);
  return (
    <>
      {view && (
        <Card
          image={image}
          manufacturerName={manufacturerName}
          name={name}
          price={price}
          oldPrice={oldPrice}
          id={id}
          stateChanger={setView}
          state={view}
          wholeItem={wholeItem}
        />
      )}
      {!view && (
        <CardProductBig
          image={image}
          manufacturerName={manufacturerName}
          name={name}
          price={price}
          availability={availability}
          stateChanger={setView}
          state={view}
          id={id}
          wholeItem={wholeItem}
        />
      )}
    </>
  );
}

export { BothCard };
