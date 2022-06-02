import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterDataProvider } from "./pages/contextsAndReducer/FilterDataProvider";
import { AuthProvider } from "./pages/contextsAndReducer/AuthProvider";
import { Provider } from "react-redux";
import store from "./Redux/store";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <FilterDataProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </FilterDataProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
