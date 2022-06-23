import "./horizontal-card.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  deleteItemFromWishlist,
  postItemToWishlist,
  deleteItemFromCart,
  increaseItemInCart,
  decreaseItemInCart,
} from "../../../Redux/Reducers-Redux/operationsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { throttle } from "Utilities/debounce";
const HorizontalCard = ({
  image,
  alt,
  productName,
  price,
  quantity,
  wholeItem,
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.operations.wishlist);
  const addToWishlist = wishlist.findIndex(
    (item) => item.name === wholeItem.name
  );
  const throttleAddQuantity = throttle((itemId) =>dispatch(increaseItemInCart(itemId)), 500);
 const throttleDecreaseQuantity=throttle((itemId)=>dispatch(decreaseItemInCart(itemId)),1000);
  return (
    <>
      <div className="horizontal-card text margin-1 ">
        <Link
          className="text-black "
          to={`/singleProduct-page/${wholeItem._id}`}
        >
          <img src={image} alt={alt} />
        </Link>
        <div className="description">
          <h2 className="description__name">
            <Link
              className="text-black "
              to={`/singleProduct-page/${wholeItem._id}`}
            >
              {productName}-(qty:{quantity})
            </Link>
          </h2>
          <div className="horizontal-cardBtn">
            <button
              className="btn-icon-med padding-none background-inherit  "
              onClick={() => dispatch(deleteItemFromCart(wholeItem._id))}
            >
              <RiDeleteBin6Line />
            </button>
            {addToWishlist > -1 && (
              <button
                className="btn "
                onClick={() => dispatch(deleteItemFromWishlist(wholeItem._id))}
              >
                <i className="fa fa-heart text-red" aria-hidden="true"></i>
              </button>
            )}
            {addToWishlist === -1 && (
              <button
                className="btn "
                onClick={() => dispatch(postItemToWishlist(wholeItem))}
              >
                <i className="fa fa-heart " aria-hidden="true"></i>
              </button>
            )}

            <button
              disabled={quantity === 1 ? true : false}
              className="btn "
              onClick={() => throttleDecreaseQuantity(wholeItem._id)}
            >
              -
            </button>
            <button
              className="btn"
              onClick={() => throttleAddQuantity(wholeItem._id)}
            >
              +
            </button>
          </div>
        </div>
        <span className="card__price">₹ {price}</span>
      </div>
    </>
  );
};

export { HorizontalCard };
