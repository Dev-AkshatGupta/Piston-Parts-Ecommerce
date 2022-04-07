import React, {
  createContext,
  useContext,
  useReducer,
} from "react";

const CartManagementContext = createContext();

const useCartManager = () => useContext(CartManagementContext);

function CartManagementProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "LOGGED_IN":
        return {
          ...state,
          wishlist: action.payload.foundUser.wishlist,
          cart: action.payload.foundUser.cart,
        };
      case "ADD_TO_WISHLIST": {
        return { ...state, wishlist: action.payload };
      }

      case "REMOVE_FROM_WISHLIST": {
        return {
          ...state,
          wishlist: action.payload,
        };
      }

      case "SET_CART": {
        return { ...state, cart: action.payload };
      }
      case "LOGOUT": {
        return { ...state, cart: [], wishlist: [] };
      }
      default:
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    wishlist: [],
    cart: [],
    userDetails: [],
  });

  return (
    <CartManagementContext.Provider value={{ state, dispatch }}>
      {children}
    </CartManagementContext.Provider>
  );
}

export { CartManagementProvider, useCartManager };
