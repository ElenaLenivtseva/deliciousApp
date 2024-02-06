import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Grid({ children }) {
  return (
    <GridSt
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </GridSt>
  );
}
const GridSt = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
