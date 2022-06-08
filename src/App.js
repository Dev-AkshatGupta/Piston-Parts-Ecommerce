import { ToastContainer } from "react-toastify";
import { checkToken } from "Redux/Reducers-Redux/authSlice";
import {
  openAddressModal,
  addAddress,
  getCartData,
  getWishlist,
} from "Redux/Reducers-Redux/operationsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllRoutes from "./AllRoutes";
import {EditAddressModal,AddressModal} from "components";
import {useLocation} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
    dispatch(getCartData());
    dispatch(getWishlist());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const [address, setAddress] = useState({
 name: "",
    house: "",
    city: "",
    state: "",
    postalCode: "",
    mobileNumber: "",   
  });
  
  const showAddressModal = useSelector(
    (state) => state.operations.isAddressModalOpen
  );
  const showEditAddressModal = useSelector(
    (state) => state.operations.isAddressEditModalOpen
  );
  return (
    <div className="App">
      <ToastContainer />
      <AllRoutes />
      {showAddressModal && (
        <AddressModal state={address} setState={setAddress}>
          <div className="flex-center-space-betw">
            <button
              className="btn btn-outline-error form-btn smooth-square-radius "
              onClick={() => dispatch(openAddressModal())}
            >
              Cancel
            </button>
            <button
              className="btn btn-outline-pri form-btn smooth-square-radius "
              onClick={() => {
                dispatch(addAddress({ address }));
                setAddress({
                  name: "",
                  house: "",
                  city: "",
                  state: "",
                  postalCode: "",
                  mobileNumber: "",
                });
                dispatch(openAddressModal());
              }}
            >
              Add Address
            </button>
          </div>
        </AddressModal>
      )}

      {showEditAddressModal && (
        <EditAddressModal/ > )}
    </div>
  );
}

export default App;
