import React, { createContext, useContext, useReducer } from "react";
import { productCardData } from "../../DATA/BrandsData";

const CartManagementContext = createContext();
const useCartManager = () => useContext(CartManagementContext);
function CartManagementProvider({ children }) {
  function reducer(state, action) {
    const { wishlist: stateWishlist, sorted } = state;

    switch (action.type) {
      case "ADD_TO_WISHLIST":
        {
          const selectedItemIndex = stateWishlist.indexOf(
            ({ id }) => id === action.payload
          );
          if (selectedItemIndex === -1) {
            return {
              ...state,
              wishlist: [
                ...stateWishlist,
                ...sorted.filter(({ id }) => id === action.payLoad),
              ],
            };
          }
        }
        break;
      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishlist: stateWishlist.filter(({ id }) => id !== action.payLoad),
        };
      

      default:
        break;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    sorted: productCardData,
    wishlist: [],
    cartManagement: [],
  });
  return (
    <CartManagementContext.Provider value={{ state, dispatch }}>
      {children}
    </CartManagementContext.Provider>
  );
}

export { CartManagementProvider, useCartManager };
