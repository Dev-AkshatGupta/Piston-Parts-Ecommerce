import React from "react";
import "./navBar.css";
import { CgProfile } from "react-icons/cg";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartManager } from "../../pages/contextsAndReducer/CartManagementProvider";
export const HiddenDivRow = ({ name, price, image, alt }) => {
  return (
    <div className="hidden-div-row margin-1">
      <span style={{ width: "5rem", height: "5rem" }}>
        <img src={image} alt={alt} />
      </span>
      <p className="toast-text">{name}</p>
      <p className="text relative">
        Price :<span className="margin-l-1">{price}</span>
      </p>
    </div>
  );
};
export const HiddenDiv = ({ position }) => {
  return (
    <div className={`hidden-div  ${position}`}>
      <div className="card-vertical-upper-text">
        <p className=" padding-l-r  margin-l-1  flex-center-space-betw padding-r-3 ">
          <span>Total Price :</span>
          {/* total Price calculator */}
          <span>500</span>
        </p>
        <div className="card-element__bottom">
          <button className="modal-button btn btn-pri ">Go to Cart </button>
          <button className="modal-button btn btn-pri">Check Out</button>
        </div>
      </div>
    </div>
  );
};
function NavBar() {
  const [toggle, setToggle] = useState({
    toggleTheme: false,
    toggleCartView: false,
    toggleWishListView: false,
  });
  const { toggleCartView } = toggle;
  const { state } = useCartManager();
  return (
    <>
      <nav className="navigation text-black">
        <div className="icon flex-center-center">
          <Link to="/" className="icons-p text-black ">
            PISTON <span className="text-accent">parTs</span>
          </Link>
        </div>
        <div className="nav-top">
          <ul className="nav-top__list">
            <li className="nav-top__list-item">
              <Link to="/logIn-page" className="link-btn">
                Log-in/Sign-up
              </Link>
            </li>
            <li className="nav-top__list-item">
              <a href="./" className="link-btn">
                Customer-Care
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-bottom ">
          <ul className="nav-bottom__list">
            <li className="nav-bottom__list-item">
              <Link to="/products-page" className="btn nav-bottom-btn text">
                Turbo-chargers
              </Link>
            </li>
            <li className="nav-bottom__list-item">
              <Link
                to="/products-page"
                className="btn btn-sec nav-bottom-btn text"
              >
                Oils Lubricants
              </Link>
            </li>
            <li className="nav-bottom__list-item">
              <Link
                to="/products-page"
                className="btn btn-sec nav-bottom-btn text"
              >
                Three-wheelers
              </Link>
            </li>
            <li className="nav-bottom__list-item">
              <Link
                to="/products-page"
                className="btn btn-sec nav-bottom-btn text"
              >
                Spare-Parts
              </Link>
            </li>
            <li className="nav-bottom__list-item">
              <Link
                to="/products-page"
                className="btn btn-sec nav-bottom-btn text"
              >
                Power Stations
              </Link>
            </li>
            <li className="nav-bottom__list-item relative">
              <Link to="/cart-page" className="btn-icon-sml nav-bottom-icons ">
                <i
                  className="fas fa-shopping-bag"
                  onClick={() => {
                    toggle.toggleWishListView === true
                      ? setToggle({
                          ...toggle,
                          toggleCartView: !toggle.toggleCartView,
                          toggleWishListView: false,
                        })
                      : setToggle({
                          ...toggle,
                          toggleCartView: !toggle.toggleCartView,
                        });
                  }}
                ></i>
              </Link>
              {toggle.toggleCartView && <HiddenDiv />}
              {state.cart.length > 0 && (
                <span className="absolute badge flex-center badge-custom-text">
                  {state.cart.length}
                </span>
              )}
            </li>

            <li className="nav-bottom__list-item ">
              <Link to="/logIn-Page" className="btn-icon-med nav-bottom-icons">
                <CgProfile />
              </Link>
            </li>
            <li className="nav-bottom__list-item relative">
              <Link
                to="/wishlist-page"
                className="btn-icon-sml nav-bottom-icons"
              >
                <i
                  className="fas fa-heart "
                  onClick={() => {
                    toggleCartView === true
                      ? setToggle({
                          ...toggle,
                          toggleWishListView: !toggle.toggleWishListView,
                          toggleCartView: false,
                        })
                      : setToggle({
                          ...toggle,
                          toggleWishListView: !toggle.toggleWishListView,
                        });
                  }}
                ></i>
              </Link>
              {toggle.toggleWishListView && (
                <HiddenDiv position="wishList-div-position" />
              )}
              {state.wishlist.length > 0 && (
                <span className="absolute badge flex-center badge-custom-text">
                  {state.wishlist.length}
                </span>
              )}
            </li>
            <li className="nav-bottom__list-item">
              <a className="btn-icon-sml nav-bottom-icons">
                {!toggle.toggleTheme && (
                  <FaSun
                    onClick={() =>
                      setToggle({ toggleTheme: !toggle.toggleTheme })
                    }
                  />
                )}
                {toggle.toggleTheme && (
                  <FaMoon
                    onClick={() =>
                      setToggle({ toggleTheme: !toggle.toggleTheme })
                    }
                  />
                )}{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { NavBar };
