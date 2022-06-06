import React from "react";
import "./ProfileAddress.css";
import {
  openAddressModal,
  openAddressEditModal,
  deleteAddress,
  getTheAddresToEdit,
} from "Redux/Reducers-Redux/operationsSlice";
import { useDispatch, useSelector } from "react-redux";
const ProfileAddress = ({}) => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.operations.address);
  return (
    <div className="profile-address">
      <h3 className="profile-address__heading">My Address</h3>
      {addresses.map((address) => (
        <div
          className="profile-address__address-block margin-2"
          key={address._id}
        >
          <p className="text">{address.name}</p>
          <div>
            <span>{address.house},</span>
            <span>{address.city},</span>
            <span>{address.state},</span>
            <span>{address.postalCode}.</span>
          </div>
          <div>
            <span>mobileNumber:</span>
            <span>{address.mobileNumber}</span>
          </div>
          <div className="flex-center-space-betw width-70 margin-1 ">
            <button className="btn btn-outline-pri padding-4" onClick={()=>{dispatch(openAddressEditModal());dispatch(getTheAddresToEdit(address))}}>Edit</button>
            <button className="btn btn-outline-error padding-4" onClick={()=>{
                dispatch(deleteAddress({id:address._id}));
            }}>Delete</button>
          </div>
        </div>
      ))}
      <div className="margin-1 flex-center">
        <button
          className="btn btn-outline-pri margin-1 
."
          onClick={() => dispatch(openAddressModal())}
        >
          <span className="text">+</span>
          <span className="margin-l-1">Add new address</span>
        </button>
      </div>
    </div>
  );
};

export { ProfileAddress };
