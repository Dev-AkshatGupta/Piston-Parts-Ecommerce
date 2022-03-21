import React, { useState } from "react";
import "./authentication.css";
import { Link } from "react-router-dom";
import { useAuthorization } from "../../pages/contextsAndReducer/AuthProvider";
function SignUpForm() {
  const { authState, authDispatch } = useAuthorization();
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function clickHandler(e) {
    //  to prevent initial refreshing of the page
    e.preventDefault();
    authDispatch({ type: "SIGN_IN", payload: details });
    console.log("triggered");
  }

  return (
    <form className="form flex-column-center card-shadow background-white no-border width-38">
      <h1 className="text-black">Sign-Up</h1>
      <input
        type="text"
        name="first-name"
        className="form-input"
        placeholder="First Name"
        onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
      />
      <input
        type="text"
        name="first-name"
        className="form-input"
        placeholder="Last Name"
        onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
      />
      <input
        type="email"
        name="email-id"
        className="form-input"
        placeholder="Enter Your Email"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <input
        type="password"
        name="password"
        className="form-input"
        placeholder="Enter Your Password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      />

      <div>
        <input type="checkbox" name="" id="" />
        <label htmlFor="input" className="sub-text">
          I accept all the terms and conditions
        </label>
      </div>

      <button
        className="btn btn-outline-pri form-btn smooth-square-radius "
        onClick={(e) => clickHandler(e)}
      >
        Sign-Up
      </button>
      <Link to="/logIn-Page" className="link-btn">
        Already have account?
        <i className="fas fa-chevron-right text-accent"></i>
      </Link>
    </form>
  );
}

export { SignUpForm };
