import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">SANA</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;