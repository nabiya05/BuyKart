import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "../pages/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SearchProvider>
      <App />
    </SearchProvider>
  </BrowserRouter>
);