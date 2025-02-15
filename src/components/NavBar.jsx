// src/components/NavBar.jsx
import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
     
    <nav className="navbar">
      <div className="logo">
      <a href="/">
      <img src="https://surl.li/rrcqtp" alt="" height="100px" width="100px" top="500px"/>
      </a>
        {/* <h1>City Pulse</h1> */} 
      </div>
      <ul className="nav-links">
        <li><a href="./Traffic">Traffic</a></li>
        <li><a href="/Monitoring.jsx">Monitoring</a></li>
        <li><a href="/Ideas">Ideas</a></li>
        <li><a href="/ContactUs">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
