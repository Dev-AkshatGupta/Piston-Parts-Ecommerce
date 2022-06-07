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
  // used for the single product page
  currentProduct: {},
  // for the address
  address: [],
  isAddressModalOpen: false,
  isAddressEditModalOpen: false,
  addressToEdit:{}
};

export const getAProduct = createAsyncThunk(
  "operations/getAProduct",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;

    } catch (error) {
      console.log(error);
    }
  }
);

export const getCartData = createAsyncThunk(
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



export const addAddress = createAsyncThunk(
  "operations/addAddress",
  async (details, { rejectWithValue }) => {
    const { address } = details;
    try {
      const encodedToken = localStorage.getItem("token");
      const { data } = await axios.post(
        "/api/user/address",
        {
          address,
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
      notifyError(error);
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "operations/deleteAddress",
  async (details, { rejectWithValue }) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const { id } = details;
      const { data } = await axios.delete(`/api/user/address/${id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      notifyWarn("Address Removed");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editAddress = createAsyncThunk(
  "operations/editAddress",
  async (details, { rejectWithValue }) => {
    try {
         const encodedToken = localStorage.getItem("token");
         
       const {_id: id } = details;
       const { data } = await axios.post(`/api/user/address/${id}`,{
         address:details
       }, {
         headers: {
           authorization: encodedToken,
         },
       });
       notifyWarn("Address Removed");
   
       return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addToCart = createAsyncThunk(
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

export const deleteItemFromCart = createAsyncThunk(
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

export const increaseItemInCart = createAsyncThunk(
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

export const decreaseItemInCart = createAsyncThunk(
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

export const getWishlist = createAsyncThunk(
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

export const postItemToWishlist = createAsyncThunk(
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

export const deleteItemFromWishlist = createAsyncThunk(
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
  reducers: {
    openAddressModal(state) {
      state.isAddressModalOpen = !state.isAddressModalOpen;
    },
    openAddressEditModal(state) {
      state.isAddressEditModalOpen = !state.isAddressEditModalOpen;
    },
    getTheAddresToEdit(state,action){
      state.addressToEdit=action.payload;

    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAProduct.pending, (state, action) => {})
      .addCase(getAProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload.product;
      })
      .addCase(getAProduct.rejected, (state, action) => {})
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
      .addCase(deleteItemFromWishlist.rejected, (state, action) => {})
      .addCase(addAddress.pending, (state, action) => {})
      .addCase(addAddress.fulfilled, (state, action) => {
        state.address = action.payload.address;
      })
      .addCase(addAddress.rejected, (state, action) => {})
      .addCase(deleteAddress.pending, (state, action) => {})
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.address = action.payload.address;
      })
      .addCase(deleteAddress.rejected, (state, action) => {})
      .addCase(editAddress.pending, (state, action) => {})
      .addCase(editAddress.fulfilled, (state, action) => {
        state.address = action.payload.address;
      })
      .addCase(editAddress.rejected, (state, action) => {});
  },
});
export const { openAddressModal, openAddressEditModal, getTheAddresToEdit } =
  operationsSlice.actions;
export default operationsSlice.reducer;
