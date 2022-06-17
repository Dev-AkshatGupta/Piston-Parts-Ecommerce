import React from "react";
import "./AddressCard.css";
import {v4 as uuid} from "uuid";
const AddressCard = ({ address, state, setState }) => {
  return (
    <div className="address-card__wrapper margin-1" key={uuid()}>
      <p className="text-2 ">
        <input
          type="radio"
          checked={address.name === state.name}
          onChange={() => {
            setState(() => address);
          }}
          id="address-name"
        />
        <label htmlFor="address-name"> {address.name}</label>
      </p>
      <p>
        <span>{address.house},</span>
        <span>{address.city},</span>
        <span>{address.state},</span>
        <span>{address.postalCode}.</span>
      </p>
    </div>
  );
};

export { AddressCard };
