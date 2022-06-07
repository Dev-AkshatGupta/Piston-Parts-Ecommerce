import "./horizontal-card.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  deleteItemFromWishlist,
  postItemToWishlist,
  deleteItemFromCart,
  increaseItemInCart,
  decreaseItemInCart,
} from "../../../Redux/Reducers-Redux/operationsSlice";
import { useDispatch,useSelector } from "react-redux";
const HorizontalCard = ({
  image,
  alt,
  productName,
  price,
  quantity,
  wholeItem,
}) => {
  const dispatch=useDispatch();
 

  const wishlist=useSelector(state=>state.operations.wishlist);
  const addToWishlist = wishlist.findIndex(
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
             
              onClick={() =>dispatch(deleteItemFromCart(wholeItem._id))}
            >
              <RiDeleteBin6Line />
            </button>
            <button
              className="btn "
         
              onClick={() => dispatch(increaseItemInCart(wholeItem._id))}
            >
              +
            </button>
            <button
              disabled={quantity === 1 ? true : false}
              className="btn "
              
              onClick={() =>dispatch( decreaseItemInCart(wholeItem._id))}
            >
              -
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
          </div>
        </div>
        <span className="card__price">₹ {price}</span>
      </div>
    </>
  );
};

export { HorizontalCard };
