import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  getCartData,
  postCartData,
  deleteCartData,
  decreaseProduct,
  incrementProduct,
  getWishListData,
  postWishListData,
  deleteWishlistData,
} from "../authenticationPages/dataFetchingAndAuthentication";

const CartManagementContext = createContext();

const useCartManager = () => useContext(CartManagementContext);

function CartManagementProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        {const{data}=postWishListData(action.payload);
          // action.payload contains whole item object
          console.log(postWishListData(action.payload));
          return { ...state, wishlist: data.wishlist };
        }
        break;
      case "REMOVE_FROM_WISHLIST":
        {
         const {data}= deleteWishlistData(action.payload._id);
         return { ...state, wishlist:data.wishlist };
        }
        break;
      case "ADD_TO_CART":
        {
          const{data}=postCartData(action.payload);
          return { ...state, cart:data.cart};
        }
        break;
      case "REMOVE_FROM_CART":
        {
         const{data}= deleteCartData(action.payload._id);
           return { ...state, cart: data.cart };
        }
        break;
      case "INCREASE_QUANTITY":
        {
         const { data } = incrementProduct(action.payload._id);
        }
        break;
      case "DECREASE_QUANTITY": {
       const { data } = decreaseProduct(action.payload._id);
      }
      


      default:
        break;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    wishlist: [],
    cart: [],
    userDetails:[],
    displayToast:false
  });
  return (
    <CartManagementContext.Provider value={{ state, dispatch }}>
      {children}
    </CartManagementContext.Provider>
  );
}

export { CartManagementProvider, useCartManager };
