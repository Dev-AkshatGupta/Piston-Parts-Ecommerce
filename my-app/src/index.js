import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {CartManagementProvider} from "./pages/contextsAndReducer/CartManagementProvider";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
 <CartManagementProvider>
    <App />
    </CartManagementProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
