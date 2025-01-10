import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Initialize Google Analytics
ReactGA.initialize("G-0TSFJCQVHW");

ReactGA.send({ 
  hitType: "pageview", 
  page: "/my-path", 
  title: "Custom Title" 
});

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
