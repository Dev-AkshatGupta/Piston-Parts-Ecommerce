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
import {CheckOutPage} from "pages/CheckOutPage/CheckOutPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products-page" element={<ProductsPage />} />
      <Route path="/signUp-Page" element={<SignUpPage />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/logIn-Page" element={<LogInPage />} />
      <Route path="/cart-page" element={<CartPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/wishlist-page" element={<WishlistPage />} />
      <Route path="/singleProduct-page/:id" element={<SingleProductPage />} />
      <Route path="/checkout-page" element={<CheckOutPage />} />
    </Routes>
  );
};

export default AllRoutes;
