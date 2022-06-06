import { ProductsPage } from "./pages/products-page/ProductsPage";
import { Routes, Route } from "react-router-dom";
import { Page404 } from "./pages/Page-404/Page404";
import { LandingPage } from "./pages/Landing-Page/LandingPage";
import { WishlistPage } from "./pages/Wishlist-page/WishlistPage";
import { LogInPage } from "./pages/authenticationPages/LogInPage";
import { SignUpPage } from "./pages/authenticationPages/SignUpPage";
import { CartPage } from "./pages/cart-page.jsx/CartPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { SingleProductPage } from "pages/SingleProductPage/SingleProductPage";
import { CheckOutPage } from "pages/CheckOutPage/CheckOutPage";
import { useSelector } from "react-redux";
import { ProfileAddress } from "components/ProfileAddress/ProfileAddress";
import { ProfileCard } from "components/DifferentCards/ProfileCard/ProfileCard";
import { PrivateRoute } from "components/CustomRoutes/PrivateRoute";
import { RestrictedRoute } from "components/CustomRoutes/RestrictedRoute";
const AllRoutes = () => {
  const currentUser = useSelector((state) => state?.auth?.currentUser);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products-page" element={<ProductsPage />} />
      <Route path="/singleProduct-page/:id" element={<SingleProductPage />} />
      <Route element={<RestrictedRoute />}>
        <Route path="/signUp-Page" element={<SignUpPage />} />
        <Route path="/logIn-Page" element={<LogInPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/profile-page" element={<ProfilePage />}>
          <Route index element={<ProfileCard userDetails={currentUser} />} />
          <Route path="address" element={<ProfileAddress />} />
        </Route>
        <Route path="/checkout-page" element={<CheckOutPage />} />
        <Route path="/wishlist-page" element={<WishlistPage />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AllRoutes;
