import "./Cart-Product-Big.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteItemFromWishlist,
  postItemToWishlist,
} from "../../../Redux/Reducers-Redux/operationsSlice";
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
    <div className=" card-vertical border-r-3  padding-2 margin-top-1 height-53R">
      <div className="card-product-image position-relative">
        <img src={image} className="border-r-3 " />

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
        <button
          className="btn btn-outline-pri margin-1"
          onClick={() => {
            handleAddToCart();
          }}
        >
          {isItemInCart ? "Go to Cart" : "Add to Cart"}
        </button>
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
