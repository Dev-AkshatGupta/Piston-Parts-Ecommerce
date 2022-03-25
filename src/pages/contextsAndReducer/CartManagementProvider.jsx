import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CartManagementContext = createContext();

const useCartManager = () => useContext(CartManagementContext);

function CartManagementProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TO_WISHLIST": {
        return { ...state, wishlist: action.payload };
      }

      case "REMOVE_FROM_WISHLIST": {
        return {
          ...state,
          wishlist: action.payload,
        };
      }

      case "ADD_TO_CART": {
        return { ...state, cart: action.payload };
      }

      case "REMOVE_FROM_CART": {
        return { ...state, cart: action.payload };
      }

      case "INCREASE_QUANTITY": {
        return { ...state, cart: action.payload };
      }

      case "DECREASE_QUANTITY": {
        return { ...state, cart: action.payload };
      }

      default:
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    wishlist: [],
    cart: [],
    userDetails: [],
    displayToast: false,
  });
  console.log(state.wishlist);
  return (
    <CartManagementContext.Provider value={{ state, dispatch }}>
      {children}
    </CartManagementContext.Provider>
  );
}

export { CartManagementProvider, useCartManager };
