import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

 function RestrictedRoute() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const location = useLocation();

  return currentUser._id ? (
    <Navigate to={"/homePage"} replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
}

export { RestrictedRoute };
