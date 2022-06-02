import { ToastContainer } from "react-toastify";
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
