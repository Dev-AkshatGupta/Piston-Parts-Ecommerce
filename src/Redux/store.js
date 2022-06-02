import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers-Redux/authSlice";
import operationsReducer from "./Reducers-Redux/operationsSlice";
const store=configureStore({
    reducer:{
        auth:authReducer,
        operations:operationsReducer
 
    }
});

export default store;