import { useEffect } from "react";
import { ProductsPage } from "./pages/products-page/ProductsPage";
import { Routes, Route } from "react-router-dom";
import {LandingPage} from "./pages/Landing-Page/LandingPage";
import {WishlistPage} from "./pages/Wishlist-page/WishlistPage";
import Mockman from "mockman-js";

import {LogInPage} from "./pages/authenticationPages/LogInPage";
import {SignUpPage} from "./pages/authenticationPages/SignUpPage";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/products-page" element={<ProductsPage/>}/>
        <Route path="/wishlist-page" element={<WishlistPage/>}/>
        <Route path="/signUp-Page" element={<SignUpPage/>}/>
        <Route path="/logIn-Page" element={<LogInPage/>}/>
        <Route path="/mock" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
