import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  signUpHandler,
  logInHandler,
} from "../authenticationPages/dataFetchingAndAuthentication";
const AuthContext = createContext();
const useAuthorization = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  //   reducer function for handling signUp and login

  const reducer = (state, action) => {
    switch (action.type) {
      case "SIGN_IN":
        console.log(action.payload);
        signUpHandler(action.payload);
        break;
      case "LOG_IN":
        console.log(action.payload);
        logInHandler(action.payload);
        break;
      default:
        break;
    }
  };
  const [authState, authDispatch] = useReducer(reducer, {});

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthorization, AuthProvider };
