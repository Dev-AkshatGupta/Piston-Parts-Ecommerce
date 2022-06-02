import "./Cart-Product-Big.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { useCartManager } from "../../../pages/contextsAndReducer/CartManagementProvider";
import { Link, useNavigate } from "react-router-dom";
import { useAuthorization } from "../../../pages/contextsAndReducer/AuthProvider";
import { Rating } from "../../../components/Rating/Rating";
import {
  useCartData,
  useWishlistData,
} from "../../../pages/authenticationPages/dataFetchingAndAuthentication";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteItemFromWishlist,
  postItemToWishlist,
} from "./../../../Redux/Reducers-Redux/operationsSlice";
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
  rating,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.operations.cart);
  const wishlist = useSelector((state) => state.operation.wishlist);
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
              {addToWishlist === -1 && token ? (
                <div className="go-like ">
                  <BsSuitHeartFill
                    onClick={(e) => {
                      postWishListData(wholeItem);
                    }}
                  />
                </div>
              ) : (
                addToWishlist === -1 && (
                  <div className="go-like ">
                    <BsSuitHeartFill
                      onClick={(e) => {
                        navigate("/logIn-page");
                      }}
                    />
                  </div>
                )
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
                    <Rating rating={parseInt(wholeItem.rating)} />

                    <div className="product-rating-details">
                      ({wholeItem.rating} -
                      <span className="rating-count">12</span> reviews)
                    </div>
                  </div>
                </div>
                <div className="product-bottom">
                  <div className="product-checkout">
                    Total Price
                    <div className="product-checkout-total">
                      <i className="fa fa-usd"></i>
                      <div className="product-checkout-total-amount">
                        ₹{price}
                      </div>
                    </div>
                  </div>
                  <div className="product-checkout-actions">
                    {cartItemsInState === -1 && token ? (
                      <button
                        className="add-to-cart btn btn-outline text"
                        onClick={(e) => {
                          postCartData(wholeItem);
                        }}
                      >
                        Add to cart
                      </button>
                    ) : (
                      cartItemsInState === -1 && (
                        <Link
                          to="/logIn-page"
                          className="add-to-cart btn btn-outline text"
                        >
                          Add to cart
                        </Link>
                      )
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
