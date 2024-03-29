import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  function handleSubbmit(e) {
    e.preventDefault();
    navigate("/searched/" + input);
  }
  return (
    <Form onSubmit={(e) => handleSubbmit(e)}>
      <div>
        <FaSearch />
        <input
          type="text"
          placeholder="Search something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </Form>
  );
}

const Form = styled.form`
  margin: 2rem 20rem;
  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    padding: 2% 10%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`;
