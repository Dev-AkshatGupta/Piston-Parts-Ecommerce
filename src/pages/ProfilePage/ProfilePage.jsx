import React from "react";
import { NavBar, Footer, ProfileNav } from "components";
import "./ProfilePage.css";
import { Outlet } from "react-router-dom";
function ProfilePage() {

  return (
    <div>
      <NavBar />
      <div className="banner-upper-empty"></div>
      <div className="profile-main">
        <div>
          <ProfileNav/>
          <Outlet/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { ProfilePage };
