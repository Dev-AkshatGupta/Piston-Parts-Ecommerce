import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { NavBar, LogInForm, useAuthorization } from "./importsAndExports";
import { ToastContainer } from "react-toastify";
function LogInPage() {
  let location = useLocation();
  let lastLocation = location.state?.from?.pathname || "/";
  const {
    authState: { token },
  } = useAuthorization();
  return (
    <>
      {/* <ToastContainer /> */}
      {token ? (
        <Navigate to={lastLocation} />
      ) : (
        <>
          <NavBar />
          <div className="banner-upper-empty"></div>
          <div className="products-main">
            <LogInForm />
          </div>
        </>
      )}
    </>
  );
}

export { LogInPage };
