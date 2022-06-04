import React from 'react';
import "./ProfileNav.css";
import { NavLink } from 'react-router-dom';
const ProfileNav = () => {
  return (
    <div className="profile-nav">
      <a href="" className="profile-nav___link ">first Link</a>
      <a href="" className="profile-nav___link"> second Link</a>
    </div>
  );
}

export { ProfileNav}
