import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import App from "./App";
import "./index.css";

ReactGA.initialize("G-0TSFJCQVHW");

ReactGA.send({ hitType: "pageview", 
  page: "/my-path", 
  title: "Custom Title" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
