import React from "react";

const ConfirmationPage = () => {
  return (
    <div className="confirmation-page__wrapper">
      <div className="confirmation-page__head"></div>
      <h1 className="text-dark-grey text-center">Order</h1>
      <div className="confirmation-image__wrapper">
        <img
          src={require("./../../IconsAndAssets/Assets/confirmed.png")}
          alt=" Order Confirmed"
        />
        <h1 className="text-accent text-center">Confirmed</h1>
        <p className="text-center text-2"> Go back to home</p>
        <p className="text-center "> <button className="btn btn-pri"> Home </button> </p>
      </div>
    </div>
  );
};

export { ConfirmationPage };
