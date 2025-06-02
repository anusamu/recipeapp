import React, { useState } from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <span className="logo-text">Recipe Hub</span>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
          <div className={isOpen ? "bar open" : "bar"}></div>
        </div>

        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/AboutUs" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Join</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
