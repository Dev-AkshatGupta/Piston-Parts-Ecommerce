import axios from "axios";
import { useEffect, useState } from "react";

// custom hook for handling the sign-up of the user

// function for authenticating the user for signUp
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
    return response;
  } catch (error) {
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
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Function for GET request in cart

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

async function postCartData(item) {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `/api/user/cart`,
      {
        product: item,
        // action:{}
      },
      {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

// function for deleting the data from  the cart
async function deleteCartData(productId) {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `/api/user/cart/:${productId}`,
      {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

// function for incrementing the data in the cart
async function incrementProduct(productId) {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `/api/user/cart/:${productId}`,
      {
        action: { type: "increment" },
      },
      {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      }
    );
    return response;
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
    return response;
  } catch (error) {
    console.log(error);
  }
}

// functions for the wishList functionality

// function for getting the data from the wishlist

async function getWishListData() {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.get(`/api/user/wishlist`, {
      headers: {
        authorization: encodedToken, // passing token as an authorization header
      },
    });
    return response;
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
        // action:{}
      },
      {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

// function for deleting the data from  the wishlist
async function deleteWishlistData(productId) {
  const encodedToken = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `/api/user/wishlist/:${productId}`,
      {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}


export {
  signUpHandler,
  logInHandler,
  getCartData,
  postCartData,
  deleteCartData,
  decreaseProduct,
  incrementProduct,
  getWishListData,
  postWishListData,
  deleteWishlistData,
};
