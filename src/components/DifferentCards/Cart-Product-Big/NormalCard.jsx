import "./Cart-Product-Big.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { useAuthorization } from "../../../pages/contextsAndReducer/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteItemFromWishlist,
  postItemToWishlist,
} from "./../../../Redux/Reducers-Redux/operationsSlice";
// Small product Card
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
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.operations.cart);
  const wishlist = useSelector((state) => state.operations.wishlist);
  const addToWishlist = wishlist.findIndex(
    (item) => item.name === wholeItem.name
  );
  const cartItemsInState = cart.findIndex(
    (item) => item.name === wholeItem.name
  );
  const {
    authState: { token },
  } = useAuthorization();

  const navigate = useNavigate();
  return (
    <div className=" card-vertical border-r-3  padding-2 margin-top-1 height-53R">
      <div className="card-product-image position-relative">
        <img src={image} className="border-r-3 " />

        {addToWishlist > -1 && (
          <div className="go-like active-liked ">
            <BsSuitHeartFill
              onClick={() => {
                dispatch(deleteItemFromWishlist(id));
              }}
            />
          </div>
        )}
        {addToWishlist === -1 && token ? (
          <div className="go-like ">
            <BsSuitHeartFill
              onClick={(e) => {
                dispatch(postItemToWishlist(wholeItem));
              }}
            />
          </div>
        ) : (
          addToWishlist === -1 && (
            <div className="go-like ">
              <BsSuitHeartFill
                onClick={() => {
                  navigate("/logIn-page");
                }}
              />
            </div>
          )
        )}
      </div>
      <div className="card-vertical-text">
        <h3 className="text-center margin-bottom-0">
          <Link className="text-black " to={`/singleProduct-page/${id}`}>
            {name}
          </Link>
        </h3>
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
            onClick={() => {
              dispatch(addToCart(wholeItem));
            }}
          >
            Add to Cart
          </button>
        ) : (
          cartItemsInState === -1 && (
            <Link
              to="/logIn-page"
              className="btn btn-outline-pri margin-1 text"
            >
              Add to Cart
            </Link>
          )
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
