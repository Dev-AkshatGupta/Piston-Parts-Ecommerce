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
    const { firstName, lastName, email, password } = action.payload;
    switch (action.type) {
      case "SIGN_IN":
        signUpHandler(firstName, lastName, email, password);
        break;
      case "LOG_IN":
        logInHandler(email, password);
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
