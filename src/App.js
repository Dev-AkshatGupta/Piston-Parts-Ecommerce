import { useEffect } from "react";
import { ProductsPage } from "./pages/products-page/ProductsPage";
import { Routes, Route } from "react-router-dom";
import {Page404} from "./pages/Page-404/Page404";
import {LandingPage} from "./pages/Landing-Page/LandingPage";
import {WishlistPage} from "./pages/Wishlist-page/WishlistPage";
import Mockman from "mockman-js";
import { ToastContainer, toast } from 'react-toastify';
import {LogInPage} from "./pages/authenticationPages/LogInPage";
import {SignUpPage} from "./pages/authenticationPages/SignUpPage";
import { CartPage } from "./pages/cart-page.jsx/CartPage";
import { useAuthorization } from "./pages/contextsAndReducer/AuthProvider";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import {Navigate} from "react-router-dom";
function App() {
const {authState:{token},authDispatch }=useAuthorization();

  return (
    <div className="App">
    <ToastContainer/>

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/products-page" element={<ProductsPage/>}/>
        <Route path="/wishlist-page" element={<PrivateRoute><WishlistPage/></PrivateRoute>}/>
   {!token &&  <Route path="/signUp-Page" element={<SignUpPage/>}/>}
   {   !token &&  <Route path="/logIn-Page" element={<LogInPage/>}/>}
        <Route path="/cart-page" element={<PrivateRoute><CartPage/></PrivateRoute>}/>
      <Route path="/404-page" element={<Page404/>}/>
     {token && <Route path="/profile-page" element={<ProfilePage/>}/>}
      <Route path="*" element={<Navigate to={token ? "/profile-page":"/404-page"}/>}/>
      <Route path="/mock" element={<Mockman/>}/>
      
        
      </Routes>
         

    </div>
  );
}

export default App;
