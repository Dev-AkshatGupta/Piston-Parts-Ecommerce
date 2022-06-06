import React from "react";
import { NavBar } from "../../components/navigation/NavBar";
import { Footer } from "../../components/footer/Footer";
import "./ProfilePage.css";
import {ProfileNav} from "components/ProfileNav/ProfileNav";
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
