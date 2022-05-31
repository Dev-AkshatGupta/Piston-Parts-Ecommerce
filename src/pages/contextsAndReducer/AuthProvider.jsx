import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  notifyError,
  notifySuccess,
  notifyInfo,
  notifyWarn,
} from "../../Utilities";
import { useCartManager } from "./CartManagementProvider";
const AuthContext = createContext();
const useAuthorization = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  //   reducer function for handling signUp and login
  const { dispatch } = useCartManager();
  const reducer = (state, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...state,
          firstName: action.payload.createdUser.firstName,
          id: action.payload.createdUser.id,
          cart: action.payload.createdUser.cart,
          wishlist: action.payload.createdUser.wishlist,
          token: action.payload.encodedToken,
        };

      case "LOG_IN":
        dispatch({ type: "LOGGED_IN", payload: action.payload });
        return {
          ...state,
          firstName: action.payload.foundUser.firstName,
          id: action.payload.foundUser._id,
          cart: action.payload.foundUser.cart,
          wishlist: action.payload.foundUser.wishlist,
          token: action.payload.encodedToken,
        };
      default:
        break;
    }
  };

  const [authState, authDispatch] = useReducer(reducer, {
    firstName: "",
    id: "",
    token: "",
    wishlist: [],
    cart: [],
  });

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        notifyError,
        notifySuccess,
        notifyInfo,
        notifyWarn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthorization, AuthProvider };
