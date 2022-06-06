import React,{useState} from 'react';
import "./EditAddressModal.css";
import { useSelector ,useDispatch } from 'react-redux';
import {  openAddressEditModal,editAddress} from "Redux/Reducers-Redux/operationsSlice";
const EditAddressModal = () => {
  const dispatch=useDispatch();
  const addressToEdit = useSelector((state) => state.operations?.addressToEdit);
  const [state, setState] = useState(addressToEdit);
  return (
    <div className="address-modal__blanket">
      <div className="address-modal__container-popup">
        <div className="address-modal__container-vertical">
          <div className="address-modal__container-wrapper">
            <form className="form flex-column-center no-border">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter Your Name"
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
              <input
                type="text"
                name="house"
                className="form-input"
                placeholder="Enter Your house no."
                value={state.house}
                onChange={(e) => setState({ ...state, house: e.target.value })}
              />
              <input
                type="text"
                name="city"
                className="form-input"
                placeholder="Enter Your city"
                value={state.city}
                onChange={(e) => setState({ ...state, city: e.target.value })}
              />
              <input
                type="text"
                name="state"
                className="form-input"
                placeholder="Enter Your State"
                value={state.state}
                onChange={(e) => setState({ ...state, state: e.target.value })}
              />
              <input
                type="text"
                name="postal code"
                className="form-input"
                placeholder="Enter Your Postal Code"
                value={state.postalCode}
                onChange={(e) =>
                  setState({ ...state, postalCode: e.target.value })
                }
              />

              <input
                type="text"
                name="mobile number"
                className="form-input"
                placeholder="Enter Your Mobile Number"
                value={state.mobileNumber}
                onChange={(e) =>
                  setState({ ...state, mobileNumber: e.target.value })
                }
              />
            </form>
            <div className="divider-2"></div>
           
            <div className="flex-center-space-betw">
              <button
                className="btn btn-outline-error form-btn smooth-square-radius "
                onClick={() => dispatch(openAddressEditModal())}
              >
                Cancel
              </button>
              <button
                className="btn btn-outline-pri form-btn smooth-square-radius "
                onClick={() => {
                  setState();
               
                  dispatch(editAddress( state ));
                  // setAddress({
                  //   name: "",
                  //   house: "",
                  //   city: "",
                  //   state: "",
                  //   postalCode: "",
                  //   mobileNumber: "",
                  // });
                  dispatch(openAddressEditModal());
                }}
              >
                Add Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditAddressModal}
