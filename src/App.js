import { useEffect } from "react";
import { ProductsPage } from "./pages/products-page/ProductsPage";
import { Routes, Route } from "react-router-dom";
import {LandingPage} from "./pages/Landing-Page/LandingPage";
import {WishlistPage} from "./pages/Wishlist-page/WishlistPage";
import Mockman from "mockman-js";
import { ToastContainer, toast } from 'react-toastify';
import {LogInPage} from "./pages/authenticationPages/LogInPage";
import {SignUpPage} from "./pages/authenticationPages/SignUpPage";
import { CartPage } from "./pages/cart-page.jsx/CartPage";
import {Toast} from "./components/toast/Toast"
import { useAuthorization } from "./pages/contextsAndReducer/AuthProvider";
function App() {
const {authState,authDispatch }=useAuthorization();
useEffect(()=>{
 
const timeoutID= setTimeout(()=> {authDispatch({
        type: "TOAST",
        payload: { display:"none", message: "", type: "" },
   
      });clearTimeout(timeoutID)},2000)
},[authState.toast.display])

  return (
    <div className="App">
      <Toast type={authState.toast.type} message={authState.toast.message} display={authState.toast.display} />

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/products-page" element={<ProductsPage/>}/>
        <Route path="/wishlist-page" element={<WishlistPage/>}/>
        <Route path="/signUp-Page" element={<SignUpPage/>}/>
        <Route path="/logIn-Page" element={<LogInPage/>}/>
        <Route path="/cart-page" element={<CartPage/>}/>
        <Route path="/mock" element={<Mockman/>}/>
         <button onClick={()=>toast("Wow so easy!")}></button>
         <ToastContainer/>
      </Routes>
      
    </div>
  );
}

export default App;
