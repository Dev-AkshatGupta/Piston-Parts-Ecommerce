import React from "react";

import "./AddressModal.css";
const AddressModal = ({ state, setState, children }) => {
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
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export { AddressModal };
