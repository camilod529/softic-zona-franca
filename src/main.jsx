import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Navbar, AdmEmp } from "./components";
import { App } from "./App";
import { store } from "./store";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <AdmEmp/>
        <App/>
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
