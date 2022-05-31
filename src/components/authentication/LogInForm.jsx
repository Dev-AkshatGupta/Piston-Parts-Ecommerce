import React, { useState } from "react";
import "./authentication.css";
import { Link } from "react-router-dom";
import { useUserDetails } from "../../pages/authenticationPages/dataFetchingAndAuthentication";
import { useDispatch } from "react-redux";
import { notifyError } from "Utilities/Notifications";
import { login } from "Redux/Reducers-Redux/authSlice";
function LogInForm() {
  const dispatch = useDispatch();
  const [viewPassword, setViewPassword] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const { logInHandler } = useUserDetails();
 const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
 function validateDetails(details) {
   if (details.email === "" || details.password === "") {
     notifyError("Fill all the fields");
     return false;
   } else if (passwordRegEx.test(details.password)) {
     return passwordRegEx.test(details.password);
   } else {
     notifyError("Please fill password correctly");
     return false;
   }
 }
 function clickHandler(e) {
   //  to prevent initial refreshing of the page
   e.preventDefault();
   if (validateDetails(details)) {
     dispatch(login(details));
   }
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
        onClick={(e) => {
          e.preventDefault();
        dispatch(  login({ email: "adarshbalika@gmail.com", password: "adarshbalika" }));
        }}
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
