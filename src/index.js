import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {CartManagementProvider} from "./pages/contextsAndReducer/CartManagementProvider";
import {FilterDataProvider} from "./pages/contextsAndReducer/FilterDataProvider";
import {AuthProvider} from "./pages/contextsAndReducer/AuthProvider";

// Call make Server
makeServer();



ReactDOM.render(

  <React.StrictMode>
    <Router>
       <FilterDataProvider> 
        <CartManagementProvider>
      <AuthProvider>
     
    <App />

</AuthProvider>
    </CartManagementProvider>
    </FilterDataProvider>
    </Router>

 </React.StrictMode>,
  document.getElementById("root")
);
