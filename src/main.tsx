import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.tsx";
import App from "./App.tsx";
import "./index.css";
import ComingSoon from "./components/ComingSoon.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Navbar />
    <App /> */}
    <ComingSoon />
  </React.StrictMode>
);
