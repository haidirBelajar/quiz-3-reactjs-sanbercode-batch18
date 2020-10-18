import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomeView from './views/home'
import NavLink from './routes/nav-link'
import RouterNav from './routes/nav-router'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink />
        <RouterNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
