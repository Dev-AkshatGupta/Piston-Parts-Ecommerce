import axios from "axios";
import { useEffect, useState } from "react";
import { useCartManager } from "../../pages/contextsAndReducer/CartManagementProvider";
import { useAuthorization } from "../../pages/contextsAndReducer/AuthProvider";
import { toast } from "react-toastify";
// custom hook for handling the sign-up of the user

// function for authenticating the user for signUp
const useUserDetails = () => {
  const { authDispatch, notifyError, notifySuccess, notifyInfo, notifyWarn } =
    useAuthorization();

  const signUpHandler = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "SIGN_IN",
        payload: response.data,
      });
      notifySuccess("Signed in succesfully");
    } catch (error) {
      notifyWarn(error);
      console.log(error);
    }
  };
  // to help user in login in the application
  const logInHandler = async (email, password) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      
      authDispatch({ type: "LOG_IN", payload: response.data });
      notifySuccess("Logged-in succesfully");
    } catch (error) {
      notifyWarn("Error in Log in ");
      console.log(error);
    }
  };
  return { logInHandler, signUpHandler };
};

// Function for GET request in cart

const useCartData = () => {
  const { dispatch } = useCartManager();
  const {
    authState,
    authDispatch,
    notifyError,
    notifySuccess,
    notifyInfo,
    notifyWarn,
  } = useAuthorization();
  async function getCartData() {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get(`/api/user/cart`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  // function for post request

  async function postCartData(product) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/user/cart`,
        {
          product,
        },
        {
          headers: {
            authorization: encodedToken, // passing token as an authorization header
          },
        }
      );

      dispatch({ type: "SET_CART", payload: response.data.cart });
      notifySuccess("Item added to cart");
      console.log(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  }

  // function for deleting the data from  the cart
  async function deleteCartData(productId) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      dispatch({ type: "SET_CART", payload: response.data.cart });
      notifyWarn("Item Removed from the cart");
    } catch (error) {
      console.log(error);
    }
  }

  // function for incrementing the data in the cart
  async function incrementProduct(productId) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: { type: "increment" },
        },
        {
          headers: {
            authorization: encodedToken, // passing token as an authorization header
          },
        }
      );
      notifySuccess("Item added to cart");
      dispatch({ type: "SET_CART", payload: response.data.cart });
    } catch (error) {
      console.log(error);
    }
  }
  // function for incrementing the data in the cart
  async function decreaseProduct(productId) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: { type: "decrement" },
        },
        {
          headers: {
            authorization: encodedToken, // passing token as an authorization header
          },
        }
      );
      dispatch({ type: "SET_CART", payload: response.data.cart });
      notifyWarn("Item removed from cart");
    } catch (error) {
      console.log(error);
    }
  }
  return {
    getCartData,
    postCartData,
    deleteCartData,
    decreaseProduct,
    incrementProduct,
  };
};

// functions for the wishList functionality

const useWishlistData = () => {
  const { dispatch } = useCartManager();
  const { authDispatch, notifyError, notifySuccess, notifyInfo, notifyWarn } =
    useAuthorization();
  // function for getting the data from the wishlist
  async function getWishListData() {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get(`/api/user/wishlist`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      return response.data.wishlist;
    } catch (error) {
      console.log(error);
    }
  }

  // function for posting data in the wishlist
  async function postWishListData(item) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `/api/user/wishlist`,
        {
          product: item,
        },
        {
          headers: {
            authorization: encodedToken, // passing token as an authorization header
          },
        }
      );
      dispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist });
      notifyInfo("Item Added to wishlist ");
    } catch (error) {
      console.log(error);
    }
  }

  // function for deleting the data from  the wishlist
  async function deleteWishlistData(productId) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
      notifyWarn("Item deleted to wishlist data");
    } catch (error) {
      console.log(error);
    }
  }
  return { getWishListData, postWishListData, deleteWishlistData };
};
export { useUserDetails, useCartData, useWishlistData };
