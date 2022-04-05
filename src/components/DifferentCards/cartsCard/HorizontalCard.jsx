import "./horizontal-card.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsSuitHeartFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { AiFillHeart } from "react-icons/ai";
import {
  useCartData,
  useWishlistData,
} from "../../../pages/authenticationPages/dataFetchingAndAuthentication";
import { useCartManager } from "../../../pages/contextsAndReducer/CartManagementProvider";
const HorizontalCard = ({
  image,
  alt,
  productName,
  price,
  quantity,
  wholeItem,
}) => {
  const { deleteCartData, incrementProduct, decreaseProduct } = useCartData();
  const { state } = useCartManager();
  const { deleteWishlistData, postWishListData } = useWishlistData();
  const addToWishlist = state.wishlist.findIndex(
    (item) => item.name === wholeItem.name
  );

  return (
    <>
      <div className="horizontal-card text margin-1 ">
        <img src={image} alt={alt} />
        <div className="description">
          <h2 className="description__name">
            {productName}-(qty:{quantity})
          </h2>
          <div className="horizontal-cardBtn">
            <button
              className="btn-icon-med padding-none background-inherit  "
              onClick={() => deleteCartData(wholeItem._id)}
            >
              <RiDeleteBin6Line />
            </button>
            <button
              className="btn "
              onClick={() => incrementProduct(wholeItem._id)}
            >
              +
            </button>
            <button
              disabled={quantity === 1 ? true : false}
              className="btn "
              onClick={() => decreaseProduct(wholeItem._id)}
            >
              -
            </button>
            {addToWishlist > -1 && (
              <button
                className="btn "
                onClick={() => deleteWishlistData(wholeItem._id)}
              >
                <i className="fa fa-heart text-red" aria-hidden="true"></i>
              </button>
            )}
            {addToWishlist === -1 && (
              <button
                className="btn "
                onClick={() => postWishListData(wholeItem)}
              >
                <i className="fa fa-heart " aria-hidden="true"></i>
              </button>
            )}
          </div>
        </div>
        <span className="card__price">₹ {price}</span>
      </div>
    </>
  );
};

export { HorizontalCard };
