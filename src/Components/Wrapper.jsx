import React from "react";
import styled from "styled-components";

export default function Wrapper({ children }) {
  return <WrapperSt>{children}</WrapperSt>;
}
const WrapperSt = styled.div`
  margin: 4rem 0r;
  padding-bottom: 4rem;
`;
