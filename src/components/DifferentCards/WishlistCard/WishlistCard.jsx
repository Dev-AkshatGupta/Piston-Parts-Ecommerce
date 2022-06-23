import "./WishlistCard.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import {
  deleteItemFromWishlist,
  addToCart,
} from "Redux/Reducers-Redux/operationsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const WishlistCard = ({
  image,
  manufacturerName,
  name,
  price,
  oldPrice,
  id,
  obj,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.operations.cart);
  const isItemAlreadyInCart = cart.some(
    ({ id: productId }) => productId === id
  );
  console.log(isItemAlreadyInCart);
  const buttonHandler = () => {
    if (isItemAlreadyInCart) {
      navigate("/cart-page");
    } else {
      dispatch(addToCart(obj));
      dispatch(deleteItemFromWishlist(id));
    }
  };
  return (
    <div className=" card-vertical border-r-3  padding-2 margin-top-1 ">
      <div className="card-product-image position-relative">
        <img src={image} className="border-r-3 " />
        <div className="go-like active-liked">
          <BsSuitHeartFill
            onClick={() => dispatch(deleteItemFromWishlist(id))}
          />
        </div>
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
        <p className="text-dark-grey margin-0">
          MRP:₹
          <span className="text-line-through ">{oldPrice}</span>
        </p>
      </div>
      <div className="card-element__bottom no-border">
        <button
          className="btn btn-outline-pri margin-1"
          onClick={() => {
            buttonHandler();
          }}
        >
         {isItemAlreadyInCart?"Go to Cart":" Move to Cart"}
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

export { WishlistCard };
