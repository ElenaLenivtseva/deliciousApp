import React from 'react';
import Pages from './pages/Pages.jsx';
import Category from './Components/Category.jsx';
import Search from './Components/Search.jsx';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
