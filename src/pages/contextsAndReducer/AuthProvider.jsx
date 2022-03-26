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
        console.log(action.payload);
        return {
          ...state,
          name: action.payload.firstName,
          id: action.payload._id,
        };

      case "LOG_IN":
        console.log(action.payload);
        return {
          ...state,
          name: action.payload.firstName,
          id: action.payload._id,
        };

      case "TOAST":
        return { ...state, toast: action.payload };
      default:
        break;
    }
  };

  const [authState, authDispatch] = useReducer(reducer, {
    name: "",
    id: "",
    toast: { display: "none", message: "", type: "" },
  });
  console.log(authState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthorization, AuthProvider };
