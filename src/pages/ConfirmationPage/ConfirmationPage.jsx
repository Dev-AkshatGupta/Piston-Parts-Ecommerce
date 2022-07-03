import React from "react";
import {useNavigate} from "react-router-dom";
const ConfirmationPage = () => {
  const navigate=useNavigate();
  return (
    <div className="confirmation-page__wrapper">
      <div className="confirmation-page__head"></div>
      <h1 className="text-dark-grey text-center">
        Order <span className="text-accent text-center">Confirmed</span>
      </h1>{" "}
      <div className="confirmation-image__wrapper">
        <img
          src={require("./../../IconsAndAssets/Assets/confirmed.png")}
          alt=" Order Confirmed"
        />
        <h1 className="text-accent text-center">Confirmed</h1>
        <p className="text-center text-2"> Go back to home</p>
        <p className="text-center ">
          {" "}
          <button
            className="btn btn-pri"
            onClick={() => {
              navigate("/products-page");
            }}
          >
            {" "}
            Home{" "}
          </button>{" "}
        </p>
      </div>
    </div>
  );
};

export { ConfirmationPage };
