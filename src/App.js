import { ProductsPage } from "./pages/products-page/ProductsPage";
import { Routes, Route } from "react-router-dom";
import { Page404 } from "./pages/Page-404/Page404";
import { LandingPage } from "./pages/Landing-Page/LandingPage";
import { WishlistPage } from "./pages/Wishlist-page/WishlistPage";
import Mockman from "mockman-js";
import { ToastContainer, toast } from "react-toastify";
import { LogInPage } from "./pages/authenticationPages/LogInPage";
import { SignUpPage } from "./pages/authenticationPages/SignUpPage";
import { CartPage } from "./pages/cart-page.jsx/CartPage";
import { useAuthorization } from "./pages/contextsAndReducer/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Navigate } from "react-router-dom";
import { checkToken } from "Redux/Reducers-Redux/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllRoutes from "./AllRoutes";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
    // dispatch();
  }, []);
  return (
    <div className="App">
      <ToastContainer />
      <AllRoutes />
    </div>
  );
}

export default App;
