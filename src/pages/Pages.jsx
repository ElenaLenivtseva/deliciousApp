import React from "react";
import Home from "./Home.jsx";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine.jsx";
import Searched from "./Searched.jsx";

export default function Pages() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisine/>} />
        <Route path="/searched/:search" element={<Searched/>} />
      </Routes>
  );
}
