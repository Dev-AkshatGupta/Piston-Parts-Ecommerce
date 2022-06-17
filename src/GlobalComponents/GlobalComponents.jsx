import React from "react";
import { notifyError } from "Utilities";
import { EditAddressModal, AddressModal } from "components";
import {
  openAddressModal,
  addAddress,
} from "Redux/Reducers-Redux/operationsSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GlobalComponents = () => {
  const dispatch = useDispatch();
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
  const validateAddress = (data) => {
    const regExMobile = /^[6-9]\d{9}$/;
    const regExPostalCode = /^[1-9][0-9]{5}$/;
    if (
      data.name.trim() !== "" &&
      data.house.trim() !== "" &&
      data.city.trim() !== "" &&
      data.state.trim() !== "" &&
      data.postalCode.trim() !== "" &&
      data.mobileNumber.trim() !== ""
    ) {
      const mobileTrimmed = data.mobileNumber.trim();
      if (
        regExMobile.test(mobileTrimmed) &&
        regExPostalCode.test(data.postalCode)
      ) {
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
      } else {
        notifyError(
          regExMobile.test(data.mobileNumber)
            ? "Please fill the postal code correctly"
            : "please fill the mobile number correctly"
        );
      }
    } else {
      notifyError("please fill all the details ");
    }
  };
  return (
    <>
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
                validateAddress(address);
              }}
            >
              Add Address
            </button>
            <button
              className="btn btn-outline-pri form-btn smooth-square-radius "
              onClick={() => {
                setAddress({
                  name: "Akshat",
                  house: "299-B",
                  city: "Bharatpur",
                  state: "Rajasthan",
                  postalCode: "321335",
                  mobileNumber: "9079225684",
                });
              }}
            >
              Fill Dummy Address
            </button>
          </div>
        </AddressModal>
      )}

      {showEditAddressModal && <EditAddressModal />}
    </>
  );
};

export default GlobalComponents;
