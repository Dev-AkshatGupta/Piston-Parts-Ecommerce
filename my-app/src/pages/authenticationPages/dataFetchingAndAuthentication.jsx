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
  } catch (error) {
    console.log(error);
  }
};
// Function for fetching the cart items
const useFetchCart = () => {
  const encodedToken = localStorage.getItem("token");
  const [foo, setFoo] = useState([]);
  const fetchFooDetails = async () => {
    try {
      const response = await axios.get(`/api/user/cart`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      setFoo(response.data.bar);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => fetchFooDetails(), []);
  return { foo };
};

export { signUpHandler, useFetchCart, logInHandler };
