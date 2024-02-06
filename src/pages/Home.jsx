import React from "react";
import Popular from "../Components/Popular.jsx";
import Veggie from "../Components/Veggie.jsx";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  );
}
