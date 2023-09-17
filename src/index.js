import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./index.styled";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter basename="/elitcars">
    <GlobalStyle />
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);