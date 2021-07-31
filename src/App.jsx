import React, { useState } from 'react';
import Navbar from './Navbar';
import {FaBars} from 'react-icons/fa';
import { BrowserRouter as Router, Route ,Link} from 'react-router-dom';
import './new.css';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
const App = () => {
  const [showNav,setShowNav] =useState(false);
  return (
    <>
      <Router>
      <header>
        <FaBars onClick={()=>setShowNav(!showNav)}/>
      </header>
      <Navbar show={showNav }/>
      <div className="main">
        <Route exact path ='/'component={Home}/>
        <Route path ='/news' component={News}/>
        <Route path='/about' component={About}/>
      </div>
     </Router>
    </>
  );
}

export default App;

