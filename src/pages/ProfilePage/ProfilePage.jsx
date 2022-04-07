import React from "react";
import { NavBar } from "../../components/navigation/NavBar";
import { Footer } from "../../components/footer/Footer";
import { ProfileCard } from "../../components/DifferentCards/ProfileCard/ProfileCard";
import { Link } from "react-router-dom";
import { useAuthorization } from "../contextsAndReducer/AuthProvider";

function ProfilePage() {
  const {
    authState: { token, firstName },
  } = useAuthorization();
  return (
    <div>
      <NavBar />
      <div className="banner-upper-empty"></div>
      <div className="products-main">
        <ProfileCard name={firstName} />
      </div>
      <Footer />
    </div>
  );
}

export { ProfilePage };
