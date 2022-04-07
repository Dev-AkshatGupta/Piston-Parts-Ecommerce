import "./navBar.css";
import React from "react";
import { useAuthorization } from "../../pages/contextsAndReducer/AuthProvider";
import { NavLink } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

function DropDownBox() {
  const { authState } = useAuthorization();
  const navigate = useNavigate();
  function LogOut() {
    localStorage.clear();
  }
  return (
    <div className="DropDown">
      {!authState.token ? (
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
