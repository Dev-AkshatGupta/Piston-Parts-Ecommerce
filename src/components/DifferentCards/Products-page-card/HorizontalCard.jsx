import "./HorizontalCard.css";
import { RiDeleteBin6Line } from "react-icons/ri";
export const HorizontalCard = ({ image, alt, productName, price }) => {
  return (
    <>
      <div className="horizontal-card text">
        <img src={image} alt={alt} />
        <div className="description">
          <h2 className="description__name">{productName}</h2>
          <span className="horizontal-cardBtn">
            <button className="btn-icon-med padding-none background-inherit">
              <RiDeleteBin6Line />
            </button>
            <button className="link  padding-none">check-out</button>
          </span>
        </div>
        <span className="card__price">{price}</span>
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
//     <div class="card-vertical smooth-square-radius card-shadow  modal padding-l-r">
//       <div class="card-vertical-upper-text">
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
//         <div class="card-element__bottom">
//           <button class="modal-button btn btn-pri ">Go to Cart </button>
//           <button class="modal-button btn btn-pri">Check Out</button>
//         </div>
//       </div>
//     </div>
//   );
// };

export { HorizontalCard };
