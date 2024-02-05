import React from "react";
import Home from "./Home.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine.jsx";
import Searched from "./Searched.jsx";
import Recipe from "../Components/Recipe.jsx";
import { AnimatePresence } from "framer-motion";
export default function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}
