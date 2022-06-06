import React from "react";
import "./ProfileNav.css";
import { NavLink } from "react-router-dom";
const ProfileNav = () => {
  return (
    <div className="profile-nav">
      <NavLink
        to="/profile-page"
        className={({ isActive }) =>
          isActive ? "profile-nav___link active" : "profile-nav___link "
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/profile-page/address"
        className={({ isActive }) =>
          isActive ? "profile-nav___link active" : "profile-nav___link "
        }
      >
        Address
      </NavLink>
    </div>
  );
};

export { ProfileNav };
