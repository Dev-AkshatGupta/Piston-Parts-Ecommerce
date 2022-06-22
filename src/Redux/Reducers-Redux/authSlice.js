import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { notifySuccess, notifyError } from "Utilities/Notifications";

const initialState = {
  currentUser: {},
  loading: false,
};
const errorStatement = (error) => {
  return error.response.data.error[0]
    ? error.response.data.error[0]
    : "Something went wrong";
};
export const login = createAsyncThunk("auth/login", async (userDetails) => {
  try {
    const response = await axios.post(`/api/auth/login`, {
      email: userDetails.email,
      password: userDetails.password,
    });

    return response.data;
  } catch (error) {
    notifyError(errorStatement(error));
    console.log(error.response);
  }
});
export const signUp = createAsyncThunk("auth/signUp", async (userDetails) => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      email: userDetails.email,
      password: userDetails.password,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
    });
    return response.data;
  } catch (error) {
    notifyError(errorStatement(error));
    console.log(error.response);
  }
});

export const checkToken = createAsyncThunk("auth/checkToken", async () => {
  const encodedToken = localStorage.getItem("piston-parts-token");
  if (encodedToken) {
    try {
      const response = await axios.post("api/auth/verify", {
        encodedToken: encodedToken,
      });
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state, action) => {
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.currentUser = action.payload.foundUser;
        state.loading = false;
        localStorage.setItem("piston-parts-token", action.payload.encodedToken);
        notifySuccess("Hey you loge'd in man");
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.currentUser = action.payload.createdUser;
        localStorage.setItem("piston-parts-token", action.payload.encodedToken);
      })
      .addCase(checkToken.fulfilled, (state, action) => {
        if (action.payload) {
          state.currentUser = action.payload.user;
        }
      });
  },
});
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
