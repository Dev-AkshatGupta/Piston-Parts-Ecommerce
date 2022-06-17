import { ToastContainer } from "react-toastify";
import { checkToken } from "Redux/Reducers-Redux/authSlice";
import {
  getCartData,
  getWishlist,
} from "Redux/Reducers-Redux/operationsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllRoutes from "./AllRoutes";
import { useLocation } from "react-router-dom";
import GlobalComponents from "GlobalComponents/GlobalComponents";

function App() {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
   if (localStorage.getItem("piston-parts-token")) {
     dispatch(getCartData());
     dispatch(getWishlist());
   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  
  return (
    <div className="App">
      <ToastContainer />
      <AllRoutes />
      <GlobalComponents/>
    </div>
  );
}

export default App;
