import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAProduct } from "./../../Redux/Reducers-Redux/operationsSlice";
import { NavBar } from "components/navigation/NavBar";
import { Link } from "react-router-dom";
import "./SingleProductPage.css";
import { addToCart,postItemToWishlist } from "Redux/Reducers-Redux/operationsSlice";
const SingleProductPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAProduct(id));
  }, []);
  const product = useSelector((state) => state?.operations?.currentProduct);
  const cart = useSelector((state) => state.operations.cart);
  const wishlist = useSelector((state) => state.operations.wishlist);
  const addToWishlist = wishlist.findIndex(
    (item) => item.name === product.name
  );

  const cartItemsInState = cart.findIndex((item) => item.name === product.name);
  return (
    <>
      <NavBar />
      <div className="banner-upper-empty"></div>
      <div className="single-product__main">
        <div className="single-product__left">
          <div className="single-product__left-image">
            <img src={product?.image?.src} alt={product?.image?.alt} />
          </div>
        </div>
        <div className="single-product__right">
          <div className="single-product__right-top">
            <h2 className="text-dark-grey ">{product?.name}</h2>
            <p className="text-dark-grey ">{product?.manufacturerName}</p>
          </div>
          <div className="single-product__right-price">
            <p className="text-dark-grey margin-top-0">
              ₹{product?.price?.actualPrice}
            </p>
            <p className="margin-top-0 ">
              <span className="text-line-through margin-top-0 ">
                ₹{product?.price?.previousPrice}
              </span>
              <span className="text-red margin-l-1 margin-top-0 ">
                (
                {`${
                  Math.floor((-(
                    product?.price?.actualPrice - product?.price?.previousPrice
                  ) *
                    100) /
                  product?.price?.previousPrice)
                }%`}
                )
              </span>
            </p>
            <div className="margin-top-0 ">
              <h4>Description</h4>
              <ul className="single-product__right-description__ul">
                {product?.description?.map((quality) => (
                  <li className="text">{quality}</li>
                ))}
              </ul>
              <details>
                <summary className="text">Details</summary>
                <p>{product?.details}</p>
              </details>
            </div>
            <div
              className=""
              style={{
                width: "100%",
                marginTop: "2rem",
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              {cartItemsInState === -1 ? (
                <button
                  className="btn btn-outline-pri margin-1"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <Link
                  to="/cart-page"
                  className="btn btn-outline-pri margin-1 text"
                >
                  Go to Cart
                </Link>
              )}

              {addToWishlist === -1 ? (
                <button
                  className="add-to-cart btn btn-outline text margin-1"
                  onClick={(e) => {
                    dispatch(postItemToWishlist(product));
                  }}
                >
                  Add to Wishlist
                </button>
              ) : (
                <Link
                  to=""
                  className="add-to-cart btn btn-outline text margin-1"
                >
                  Go to wishlist
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SingleProductPage };
