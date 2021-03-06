import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  getAProduct,
  addToCart,
  postItemToWishlist,
} from "Redux/Reducers-Redux/operationsSlice";
import { NavBar } from "components";
import "./SingleProductPage.css";
import { v4 as uuid } from "uuid";
import ReactImageMagnify from "react-image-magnify";
import { Loader } from "components";
const SingleProductPage = () => {
  const { id } = useParams();
  const currentPath = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAProduct(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const product = useSelector((state) => state.operations?.currentProduct);
  const cart = useSelector((state) => state.operations.cart);
  const wishlist = useSelector((state) => state.operations.wishlist);
  const isLoading = useSelector((state) => state.operations.loading.singlePageLoader);
  const isItemInWishlist =
    wishlist.findIndex((item) => item.name === product.name) === -1
      ? false
      : true;
  const isItemInCart =
    cart.findIndex((item) => item.name === product.name) === -1 ? false : true;

  const userId = useSelector((state) => state.auth.currentUser?._id);
  const handleAddToCart = () => {
    userId
      ? isItemInCart
        ? navigate("/cart-page")
        : dispatch(addToCart(product))
      : navigate("/logIn-Page", {
          state: { from: currentPath },
          replace: true,
        });
  };
  const handleWishlist = () => {
    userId
      ? isItemInWishlist
        ? navigate("/wishlist-page")
        : dispatch(postItemToWishlist(product))
      : navigate("/logIn-Page", {
          state: { from: currentPath },
          replace: true,
        });
  };

  return (
    <>
      <NavBar />
      <div className="banner-upper-empty"></div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="single-product__main">
          <div className="single-product__left">
            <div className="single-product__left-image">
              {/* <img src={product?.image?.src} alt="product image" /> */}
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "product image",
                    src: product?.image?.src,
                    width: 450,
                    height: 450,
                  },

                  largeImage: {
                    src: product?.image?.src,
                    width: 1800,
                    height: 1800,
                  },
                  enlargedImageContainerDimensions: {
                    width: "180%",
                    height: "180%",
                  },
                }}
                isActivatedOnTouch
              />
            </div>
          </div>
          <div className="single-product__right">
            <div className="single-product__right-top">
              <h2 className="text-dark-grey ">{product?.name}</h2>
              <p className="text-dark-grey ">{product?.manufacturerName}</p>
            </div>
            <div className="single-product__right-price">
              <p className="text-dark-grey margin-top-0">
                ???{product?.price?.actualPrice}
              </p>
              <p className="margin-top-0 ">
                <span className="text-line-through margin-top-0 ">
                  ???{product?.price?.previousPrice}
                </span>
                <span className="text-red margin-l-1 margin-top-0 ">
                  (
                  {`${Math.floor(
                    (-(
                      product?.price?.actualPrice -
                      product?.price?.previousPrice
                    ) *
                      100) /
                      product?.price?.previousPrice
                  )}%`}
                  )
                </span>
              </p>
              <div className="margin-top-0 ">
                <h4>Description</h4>
                <ul className="single-product__right-description__ul">
                  {product?.description?.map((quality) => (
                    <li className="text" key={uuid()}>
                      {quality}
                    </li>
                  ))}
                </ul>
                <details>
                  <summary className="text">Details</summary>
                  <p>{product?.details}</p>
                </details>
              </div>
              <div className="flex-wrap display-flex flex-column">
                <button
                  className="btn btn-outline-pri margin-1"
                  onClick={() => {
                    handleAddToCart();
                  }}
                >
                  {isItemInCart ? "Go to cart" : " Add to Cart"}
                </button>
                <button
                  className=" btn btn-outline  margin-1"
                  onClick={() => {
                    handleWishlist();
                  }}
                >
                  {isItemInWishlist ? "Go to wishlist" : "Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { SingleProductPage };
