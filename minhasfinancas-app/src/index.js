import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main/App";
import AuthProvider from "./app/provider/authProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
