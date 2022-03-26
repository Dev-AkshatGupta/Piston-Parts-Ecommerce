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

// export const HiddenDivRow = ({ name, price, image, alt }) => {
//   return (
//     <div className="hidden-div-row margin-1">
//       <span style={{ width: "5rem", height: "5rem" }}>
//         <img src={image} alt={alt} />
//       </span>
//       <p className="toast-text">{name}</p>
//       <p className="text relative">
//         Price :<span className="margin-l-1">{price}</span>
//       </p>
//     </div>
//   );
// };
// export const HiddenDiv = () => {
//   return (
//     <div className="card-vertical smooth-square-radius card-shadow  modal padding-l-r">
//       <div className="card-vertical-upper-text">
//         <HiddenDivRow
//           name="Akshat"
//           image="https://cdn1.staticans.com/image/data/Vastrado/4-Mar-2022/LT1860A_2.jpg?width=415&height=550&mode=fill&fill=solid&fill-color=FFFFFF"
//           price="400"
//         />
//         <HiddenDivRow
//           name="Akshat"
//           image="https://cdn1.staticans.com/image/data/Vastrado/4-Mar-2022/LT1860A_2.jpg?width=415&height=550&mode=fill&fill=solid&fill-color=FFFFFF"
//           price="400"
//         />
//         <HiddenDivRow
//           name="Akshat"
//           image="https://cdn1.staticans.com/image/data/Vastrado/4-Mar-2022/LT1860A_2.jpg?width=415&height=550&mode=fill&fill=solid&fill-color=FFFFFF"
//           price="400"
//         />
//         <p className=" padding-l-r  margin-l-1  flex-center-space-betw padding-r-3 ">
//           <span>Total Price :</span>
//           <span>500</span>
//         </p>
//         <div className="card-element__bottom">
//           <button className="modal-button btn btn-pri ">Go to Cart </button>
//           <button className="modal-button btn btn-pri">Check Out</button>
//         </div>
//       </div>
//     </div>
//   );
// };

export { HorizontalCard };
