import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const AuthContext = createContext();
const useAuthorization = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  //   reducer function for handling signUp and login

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
        console.log(action.payload.foundUser);
        return {
          ...state,
          firstName: action.payload.foundUser.firstName,
          id: action.payload.foundUser._id,
          cart: action.payload.foundUser.cart,
          wishlist: action.payload.foundUser.wishlist,
          token: action.payload.encodedToken,
        };

      case "TOAST":
        return { ...state, toast: action.payload };
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
    toast: { display: "none", message: "", type: "" },
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthorization, AuthProvider };
