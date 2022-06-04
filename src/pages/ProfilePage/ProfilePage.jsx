import React from "react";
import { NavBar } from "../../components/navigation/NavBar";
import { Footer } from "../../components/footer/Footer";
import { ProfileCard } from "../../components/DifferentCards/ProfileCard/ProfileCard";
import { useAuthorization } from "../contextsAndReducer/AuthProvider";
import { useSelector } from "react-redux";
import "./ProfilePage.css";
import {ProfileNav} from "components/ProfileNav/ProfileNav";
function ProfilePage() {
  const {
    authState: { token, firstName },
  } = useAuthorization();
  const currentUser=useSelector(state=>state?.auth?.currentUser);
  return (
    <div>
      <NavBar />
      <div className="banner-upper-empty"></div>
      <div className="profile-main">
        <div>
          <ProfileNav/>
          <ProfileCard userDetails={currentUser} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { ProfilePage };
