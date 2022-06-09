import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  RestrictedRoute,
  PrivateRoute,
  ProfileCard,
  ProfileAddress,
} from "components";
import {
  ProductsPage,
  Page404,
  LandingPage,
  WishlistPage,
  LogInPage,
  SignUpPage,
  CartPage,
  ProfilePage,
  SingleProductPage,
  CheckOutPage,
} from "pages";
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
