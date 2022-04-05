import React, { useState } from "react";
import "./authentication.css";
import { Link } from "react-router-dom";
import { useUserDetails } from "../../pages/authenticationPages/dataFetchingAndAuthentication";

import { useAuthorization } from "../../pages/contextsAndReducer/AuthProvider";
function LogInForm() {
  const { authState, authDispatch } = useAuthorization();
  const [viewPassword, setViewPassword] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const { logInHandler } = useUserDetails();
  function clickHandler(e) {
    //  to prevent initial refreshing of the page
    e.preventDefault();

    logInHandler(details.email, details.password);
  }

  return (
    <form className="form flex-column-center card-shadow background-white no-border width-38">
      <h1 className="text-black">Log-In</h1>
      <input
        type="email"
        name="email-id"
        className="form-input"
        placeholder="Enter Your Email"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <input
        type={!viewPassword ? "password" : "text"}
        name="password"
        className="form-input"
        placeholder="Enter Your Password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      />
      {!viewPassword && (
        <i
          className="fa fa-eye text"
          aria-hidden="true"
          onClick={(e) => setViewPassword(!viewPassword)}
        ></i>
      )}
      {viewPassword && (
        <i
          className="fas fa-eye-slash text"
          onClick={(e) => setViewPassword(!viewPassword)}
        ></i>
      )}
      <div className="flex-center-space-betw">
        <input type="checkbox" name="" id="" />
        <label htmlFor="input" className="sub-text">
          remember me
        </label>
        <a href="" className="link-btn text-accent">
          Forget password ?
        </a>
      </div>
      <button
        className="btn btn-outline-pri form-btn smooth-square-radius "
        onClick={(e) => clickHandler(e)}
      >
        Log-In
      </button>
      <button
        className="btn btn-outline-pri form-btn smooth-square-radius "
        onClick={(e) => logInHandler("adarshbalika@gmail.com", "adarshbalika")}
      >
        Guest Log-In
      </button>
      <Link to="/signUp-Page" className="link-btn">
        Create new account <i className="fas fa-chevron-right text-accent"></i>
      </Link>
    </form>
  );
}

export { LogInForm };
