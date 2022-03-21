import React, { useState } from "react";
import "./authentication.css";
import { Link } from "react-router-dom";
import { useAuthorization } from "../../pages/contextsAndReducer/AuthProvider";
function LogInForm() {
  const { authState, authDispatch } = useAuthorization();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  function clickHandler(e) {
    //  to prevent initial refreshing of the page
    e.preventDefault();
    authDispatch({ type: "LOG_IN", payload: details });
    console.log("triggered");
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
        type="password"
        name="password"
        className="form-input"
        placeholder="Enter Your Password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      />

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
      <Link to="/signUp-Page" className="link-btn">
        Create new account <i className="fas fa-chevron-right text-accent"></i>
      </Link>
    </form>
  );
}

export { LogInForm };
