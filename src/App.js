import { ToastContainer } from "react-toastify";
import { checkToken } from "Redux/Reducers-Redux/authSlice";
import {
  openAddressModal,
  addAddress,
} from "Redux/Reducers-Redux/operationsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllRoutes from "./AllRoutes";
import { useState } from "react";
import {EditAddressModal,AddressModal} from "components";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
    // dispatch(getAllAddress());

  }, []);

   

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
                console.log(address);
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
