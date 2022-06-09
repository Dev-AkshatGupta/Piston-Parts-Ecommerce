import React from "react";
import "./AddressCard.css";
const AddressCard = ({ address ,state,setState}) => {
  return (
    <div className="address-card__wrapper">
      <p className="text-2 ">
        <input type="radio" 
        checked={address.name===state.name}
        onChange={()=>{setState(()=>address)}}
        /> {address.name}
      </p>
      <p >
        <span>{address.house},</span>
        <span>{address.city},</span>
        <span>{address.state},</span>
        <span>{address.postalCode}.</span>
      </p>
    </div>
  );
};

export { AddressCard };
