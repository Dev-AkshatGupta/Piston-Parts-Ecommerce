import "./NavBar.css";
import { CgProfile } from "react-icons/cg";
import { ImMenu } from "react-icons/im";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFilterManger } from "ContextsAndReducer/FilterDataProvider";
import { useSelector } from "react-redux";
import { debounce } from "Utilities/debounce";
function NavBar({ menuBtn = false }) {
  const navigate = useNavigate();
  const state = useSelector((state) => state.operations);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { aside, setAside, filterManager, filtered } = useFilterManger();
  const { pathname } = useLocation();

  const search = (e) =>
    filterManager({
      type: "SEARCH",
      payload: e.target.value,
    });
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
                    onChange={search}
                    value={filtered.searchText}
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
                {/* <i className="fas fa-shopping-bag"></i> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  height="20"
                  width="20"
                >
                  <path
                    fill="#d5d9f6"
                    stroke="#6c757d"
                    d="M7 3.25C5.44729 3.25 3.82348 3.25 2.46842 3.50467C1.84973 3.62094 1.36695 4.09818 1.23226 4.71312C1 5.77353 1 6.74895 1 8.25C1 9.75105 1 10.7265 1.23226 11.7869C1.36695 12.4018 1.84973 12.8791 2.46842 12.9953C3.82348 13.25 5.44729 13.25 7 13.25C8.55271 13.25 10.1765 13.25 11.5316 12.9953C12.1503 12.8791 12.633 12.4018 12.7677 11.7869C13 10.7265 13 9.75105 13 8.25C13 6.74895 13 5.77353 12.7677 4.71312C12.633 4.09818 12.1503 3.62094 11.5316 3.50467C10.1765 3.25 8.55271 3.25 7 3.25Z"
                  ></path>
                  <path
                    stroke="#6c757d"
                    d="M4.5 3.27887L4.5 2.75C4.5 1.64543 5.39543 0.75 6.5 0.75H7.5C8.60457 0.75 9.5 1.64543 9.5 2.75V3.27887"
                  ></path>
                  <path
                    stroke="#6c757d"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 9.75H9"
                  ></path>
                  <path
                    stroke="#6c757d"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 6.75H9"
                  ></path>
                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  height="20"
                  width="20"
                >
                  <path
                    fill="#d5d9f6"
                    stroke="#fab75f"
                    d="M7 3.25C5.44729 3.25 3.82348 3.25 2.46842 3.50467C1.84973 3.62094 1.36695 4.09818 1.23226 4.71312C1 5.77353 1 6.74895 1 8.25C1 9.75105 1 10.7265 1.23226 11.7869C1.36695 12.4018 1.84973 12.8791 2.46842 12.9953C3.82348 13.25 5.44729 13.25 7 13.25C8.55271 13.25 10.1765 13.25 11.5316 12.9953C12.1503 12.8791 12.633 12.4018 12.7677 11.7869C13 10.7265 13 9.75105 13 8.25C13 6.74895 13 5.77353 12.7677 4.71312C12.633 4.09818 12.1503 3.62094 11.5316 3.50467C10.1765 3.25 8.55271 3.25 7 3.25Z"
                  ></path>
                  <path
                    stroke="#fab75f"
                    d="M4.5 3.27887L4.5 2.75C4.5 1.64543 5.39543 0.75 6.5 0.75H7.5C8.60457 0.75 9.5 1.64543 9.5 2.75V3.27887"
                  ></path>
                  <path
                    stroke="#fab75f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 9.75H9"
                  ></path>
                  <path
                    stroke="#fab75f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 6.75H9"
                  ></path>
                </svg>{" "}
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
                className="btn-icon-med nav-bottom-icons text-dark-grey"
              >
                {/* <CgProfile /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  height="20"
                  width="20"
                >
                  <path
                    fill="#d5d9f6"
                    stroke="#6c757d"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 7C8.72589 7 10.125 5.60089 10.125 3.875C10.125 2.14911 8.72589 0.75 7 0.75C5.27411 0.75 3.875 2.14911 3.875 3.875C3.875 5.60089 5.27411 7 7 7Z"
                  ></path>
                  <path
                    fill="#d5d9f6"
                    stroke="#6c757d"
                    d="M12.5482 10.5938C13.8881 11.4886 13.0477 13.2501 11.4365 13.2501H2.56354C0.952315 13.2501 0.111973 11.4886 1.45186 10.5938C3.03951 9.53345 4.94757 8.91528 7.00001 8.91528C9.05245 8.91528 10.9605 9.53345 12.5482 10.5938Z"
                  ></path>
                </svg>
              </a>
            </li>

            <li className="nav-bottom__list-item relative">
              <a
                onClick={() => clickHandler("/wishlist-page")}
                className="btn-icon-sml nav-bottom-icons"
              >
                {/* <i className="fas fa-heart "></i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  height="20"
                  width="20"
                >
                  <path
                    fill="#d5d9f6"
                    stroke="#6c757d"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.99999 3.18302C3.98028 -0.522119 0.791951 2.11054 0.75 4.9485C0.75 9.17342 5.80507 12.6412 6.99999 12.6412C8.19491 12.6412 13.25 9.17342 13.25 4.9485C13.208 2.11054 10.0197 -0.522119 6.99999 3.18302Z"
                  ></path>
                </svg>
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
