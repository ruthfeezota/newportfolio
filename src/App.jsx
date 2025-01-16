import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Bahasa from "./pages/Bahasa"
import Pause from "./pages/Pause";

const App = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/bahasa" element={<Bahasa />} />
      <Route path="/pause" element={<Pause />} />
      
    </Routes>
  );
};

export default App;
