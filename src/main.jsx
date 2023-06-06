import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index1.css";
import { AppProvider } from "./context";
import App1 from "./App1";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App1 />
    </AppProvider>
  </React.StrictMode>
);
