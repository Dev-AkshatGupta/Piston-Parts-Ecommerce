import "./Cart-Product-Big.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { Rating } from "../../Rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteItemFromWishlist,
  postItemToWishlist,
} from "../../../Redux/Reducers-Redux/operationsSlice";
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
   const navigate = useNavigate();
  const currentPath = useLocation();
  const cart = useSelector((state) => state.operations.cart);
  const wishlist = useSelector((state) => state.operations.wishlist);
  const isItemInWishlist =
    wishlist.findIndex((item) => item.name === wholeItem.name) === -1
      ? false
      : true;
  const isItemInCart =
    cart.findIndex((item) => item.name === wholeItem.name) === -1
      ? false
      : true;

  const userId = useSelector((state) => state.auth.currentUser?._id);
  const handleAddToCart = () => {
    userId
      ? isItemInCart
        ? navigate("/cart-page")
        : dispatch(addToCart(wholeItem))
      : navigate("/logIn-Page", {
          state: { from: currentPath },
          replace: true,
        });
  };
  const handleWishlist = () => {
    userId
      ? isItemInWishlist
        ? dispatch(deleteItemFromWishlist(id))
        : dispatch(postItemToWishlist(wholeItem))
      : navigate("/logIn-Page", {
          state: { from: currentPath },
          replace: true,
        });
  };
  

 
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

              {isItemInWishlist ? (
                <div className="go-like active-liked ">
                  <BsSuitHeartFill
                    onClick={() => {
                      handleWishlist();
                    }}
                  />
                </div>
              ) : (
                <div className="go-like ">
                  <BsSuitHeartFill
                    onClick={(e) => {
                      handleWishlist();
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
                    {wholeItem?.description}
                  </div>
                  <div className="product-available text">
                    {availability && <>In stock.</>}
                    {!availability && <>Out of stock.</>}
                    <span className="product-extended">
                      <Link
                        to={`/singleProduct-page/${id}`}
                        className="link-btn"
                      >
                        View Product
                      </Link>
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
                    <button
                      className="btn btn-outline-pri "
                      onClick={() => {
                        handleAddToCart();
                      }}
                    >
                      {isItemInCart ? "Go to Cart" : "Add to Cart"}
                    </button>
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
