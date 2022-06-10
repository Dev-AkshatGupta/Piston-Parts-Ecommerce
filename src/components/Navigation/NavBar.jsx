import "./NavBar.css";
import { CgProfile } from "react-icons/cg";
import { ImMenu } from "react-icons/im";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFilterManger } from "ContextsAndReducer/FilterDataProvider";
import { useSelector } from "react-redux";

function NavBar({ menuBtn = false }) {
  const navigate = useNavigate();
  const state = useSelector((state) => state.operations);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { aside, setAside, filterManager } = useFilterManger();
  const { pathname } = useLocation();

  const clickHandler = (navigateTo) => {
    currentUser._id
      ? navigate(navigateTo)
      : navigate("/logIn-Page", {
          state: { from: { pathname: navigateTo } },
          replace: true,
        });
  };
  return (
    <>
      <nav className="navigation text-black">
        {menuBtn && (
          <div
            className={`icon  icons-p align-self-center ${
              menuBtn && `menu-display`
            }`}
          >
            <ImMenu onClick={() => setAside(!aside)} />
          </div>
        )}
        <div className="icon flex-center-center">
          <Link to="/" className="icons-p text-black ">
            PISTON <span className="text-accent">parTs</span>
          </Link>
        </div>
        <div className="nav-top">
          <ul className="nav-top__list change-nav-display">
            <li className="nav-top__list-item">
              <a href="./" className="link-btn">
                Customer-Care
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-bottom ">
          <ul className="nav-bottom__list">
            {pathname === "/products-page" ? (
              <li className="nav-bottom__list-item">
                <div className="nav-bottom-search-box">
                  <input
                    type="search"
                    className="nav-bottom-search"
                    placeholder=" search"
                    onChange={(e) => {
                      filterManager({
                        type: "SEARCH",
                        payload: e.target.value,
                      });
                    }}
                  />
                </div>
              </li>
            ) : (
              <>
                <li className="nav-bottom__list-item change-nav-display">
                  <Link to="/products-page" className="btn nav-bottom-btn text">
                    Turbo-chargers
                  </Link>
                </li>
                <li className="nav-bottom__list-item change-nav-display">
                  <Link
                    to="/products-page"
                    className="btn btn-sec nav-bottom-btn text"
                  >
                    Oils Lubricants
                  </Link>
                </li>
                <li className="nav-bottom__list-item change-nav-display">
                  <Link
                    to="/products-page"
                    className="btn btn-sec nav-bottom-btn text"
                  >
                    Three-wheelers
                  </Link>
                </li>
                <li className="nav-bottom__list-item change-nav-display">
                  <Link
                    to="/products-page"
                    className="btn btn-sec nav-bottom-btn text"
                  >
                    Spare-Parts
                  </Link>
                </li>
                <li className="nav-bottom__list-item change-nav-display">
                  <Link
                    to="/products-page"
                    className="btn btn-sec nav-bottom-btn text"
                  >
                    Power Stations
                  </Link>
                </li>
              </>
            )}
            <li className="nav-bottom__list-item relative ">
              <a
                onClick={() => clickHandler("/cart-page")}
                className="btn-icon-sml nav-bottom-icons "
              >
                <i className="fas fa-shopping-bag"></i>
              </a>

              {state.cart.length > 0 && (
                <span className="absolute badge flex-center badge-custom-text">
                  {state.cart.length}
                </span>
              )}
            </li>

            <li className="nav-bottom__list-item position-relative">
              <a
                onClick={() => clickHandler("/profile-page")}
                className="btn-icon-med nav-bottom-icons"
              >
                <CgProfile />
              </a>
            </li>

            <li className="nav-bottom__list-item relative">
              <a
                onClick={() => clickHandler("/wishlist-page")}
                className="btn-icon-sml nav-bottom-icons"
              >
                <i className="fas fa-heart "></i>
              </a>

              {state.wishlist.length > 0 && (
                <span className="absolute badge flex-center badge-custom-text">
                  {state.wishlist.length}
                </span>
              )}
            </li>
            <li className="nav-bottom__list-item change-nav-display"></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { NavBar };
