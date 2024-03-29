import React from 'react';
import Pages from './pages/Pages.jsx';
import Category from './Components/Category.jsx';
import Search from './Components/Search.jsx';
import { BrowserRouter } from 'react-router-dom';
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {GiKnifeFork} from 'react-icons/gi'
function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}>deliciousss</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
padding: 4rem 0;
display: flex;
justify-content: flex-start;
align-items: center;

svg {
  font-size: 2rem;
}
`