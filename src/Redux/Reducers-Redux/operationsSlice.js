import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  notifySuccess,
  notifyError,
  notifyWarn,
  notifyInfo,
} from "Utilities/Notifications";

const initialState = {
  wishlist: [],
  cart: [],
};
const getCategories = createAsyncThunk("operations/getCategories");

const getCartData = createAsyncThunk(
  "operations/getCartData",
  async function (_, { rejectWithValue }) {
    const encodedToken = localStorage.getItem("token");
    try {
      const { data } = await axios.get(`/api/user/cart`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const addToCart = createAsyncThunk(
  "operations/addToCart",
  async function (product, { rejectWithValue }) {
    const encodedToken = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `/api/user/cart`,
        {
          product,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const deleteItemFromCart = createAsyncThunk(
  "operations/deleteItemFromCart",
  async function (productId, { rejectWithValue }) {
    const encodedToken = localStorage.getItem("token");
    try {
      const { data } = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      notifyWarn("Item Removed from the cart");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const increaseItemInCart = createAsyncThunk(
  "operations/increaseItemInCart",
  async function (productId, { rejectWithValue }) {
    const encodedToken = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: { type: "increment" },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      notifySuccess("Item added to cart");
      return data;

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const decreaseItemInCart = createAsyncThunk(
  "operations/decreaseItemInCart",
  async function (productId, { rejectWithValue }) {
    const encodedToken = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: { type: "decrement" },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return data;

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const getWishlist = createAsyncThunk(
  "operations/getWishlist",
  async function (_, { rejectWithValue }) {
    const encodedToken = localStorage.getItem("token");
    try {
      const { data } = await axios.get(`/api/user/wishlist`, {
        headers: {
          authorization: encodedToken,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const postItemToWishlist = createAsyncThunk(
  "operations/postItemToWishlist",
  async function (item, { rejectWithValue }) {
    const encodedToken = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `/api/user/wishlist`,
        {
          product: item,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      notifyInfo("Item Added to wishlist ");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const deleteItemFromWishlist = createAsyncThunk(
  "operations/deleteItemFromWishlist",
  async function (productId, { rejectWithValue }) {
    const encodedToken = localStorage.getItem("token");
    try {
      const { data } = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });

      notifyWarn("Item deleted from wishlist data");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCartData.pending, (state, action) => {})
      .addCase(getCartData.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
      })
      .addCase(getCartData.rejected, (state, action) => {})
      .addCase(addToCart.pending, (state, action) => {})
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
      })
      .addCase(addToCart.rejected, (state, action) => {})
      .addCase(deleteItemFromCart.pending, (state, action) => {})
      .addCase(deleteItemFromCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
      })
      .addCase(deleteItemFromCart.rejected, (state, action) => {})
      .addCase(increaseItemInCart.pending, (state, action) => {})
      .addCase(increaseItemInCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
      })
      .addCase(increaseItemInCart.rejected, (state, action) => {})
      .addCase(decreaseItemInCart.pending, (state, action) => {})
      .addCase(decreaseItemInCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
      })
      .addCase(decreaseItemInCart.rejected, (state, action) => {})
      .addCase(getWishlist.pending, (state, action) => {})
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload.wishlist;
      })
      .addCase(getWishlist.rejected, (state, action) => {})
      .addCase(postItemToWishlist.pending, (state, action) => {})
      .addCase(postItemToWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload.wishlist;
      })
      .addCase(postItemToWishlist.rejected, (state, action) => {})
      .addCase(deleteItemFromWishlist.pending, (state, action) => {})
      .addCase(deleteItemFromWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload.wishlist;
      })
      .addCase(deleteItemFromWishlist.rejected, (state, action) => {});
  },
});
// export const {}=operationsSlice.actions;
export default operationsSlice.reducer;
