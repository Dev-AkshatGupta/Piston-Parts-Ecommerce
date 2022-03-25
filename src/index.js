import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {CartManagementProvider} from "./pages/contextsAndReducer/CartManagementProvider";
import {FilterDataProvider} from "./pages/contextsAndReducer/FilterDataProvider";
import {AuthProvider} from "./pages/contextsAndReducer/AuthProvider";
import axios from "axios";
// Call make Server
makeServer();

// eefie function for me being always logged-in for various functionalities
    (async () => {
      try {
        const response = await axios.post("/api/auth/login", {
              email: "adarshbalika@gmail.com",
    password: "adarshbalika",
        });
        // console.log(response);
        localStorage.setItem("token", response.data.encodedToken);
      } catch (error) {
        console.log(error);
      }
    })();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <FilterDataProvider> 
        <CartManagementProvider>
    <App />
    </CartManagementProvider>
    </FilterDataProvider>
</AuthProvider>
    </Router>

 </React.StrictMode>,
  document.getElementById("root")
);
