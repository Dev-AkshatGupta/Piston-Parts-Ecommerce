import "./WishlistCard.css";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
const WishlistCard = ({
  image,
  manufacturerName,
  name,
  price,
  oldPrice,
  stateChanger,
  state,
  id,
  wishlistManager,
  type,
  setType,
}) => {
  return (
    <div className=" card-vertical border-r-3  padding-2 margin-bottom-1 ">
      <div className="card-product-image position-relative">
        <img src={image} className="border-r-3 " />
        <div
          className={`go-like ${
            type === "ADD_TO_WISHLIST" ? null : "active-liked"
          }`}
        >
          <BsSuitHeartFill
            onClick={() => {
              type === "ADD_TO_WISHLIST"
                ? setType("REMOVE_FROM_WISHLIST")
                : setType("ADD_TO_WISHLIST");
              wishlistManager({ type: type, payLoad: id });
            }}
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
        <p className="text-dark-grey margin-0" style={{ margin: "0" }}>
          MRP:₹
          <span className="text-line-through ">{oldPrice}</span>
        </p>
      </div>
      <div className="card-element__bottom no-border">
        <button className="btn btn-outline-pri margin-1">Add to Cart</button>
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

export { WishlistCard };
