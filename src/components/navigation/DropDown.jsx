import "./navBar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DropDownBox() {
  const navigate = useNavigate();
  function LogOut() {
    localStorage.clear();
  }
  const id = useSelector((state) => state.auth?.currentUser._id);
  return (
    <div className="DropDown">
      {!id ? (
        <>
          <div>
            <NavLink
              to="/signUp-Page"
              className={({ isActive }) =>
                isActive
                  ? "nav-drawer-items-padding  active-aside-link"
                  : "nav-drawer-items-padding  "
              }
            >
              Sign-Up
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/logIn-page"
              className={({ isActive }) =>
                isActive
                  ? "nav-drawer-items-padding  active-aside-link"
                  : "nav-drawer-items-padding "
              }
            >
              Log-In
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <Link to="/profile-page">Profile</Link>
          <a
            className="btn btn-outline-error"
            onClick={() => {
              LogOut();
              navigate("/");
            }}
          >
            Log Out
          </a>
        </>
      )}
    </div>
  );
}
export { DropDownBox };
