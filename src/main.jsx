import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { DataProvider } from "./context/DataContext.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <BrowserRouter  basename="/User-Weather/">
      <App />
    </BrowserRouter>
  </DataProvider>
);
