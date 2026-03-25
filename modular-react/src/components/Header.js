import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <span className="logo-icon">⬡</span>
          <span className="logo-text">ModularApp</span>
        </div>
        <nav className="header-nav">
          <a href="#content-a">Section A</a>
          <a href="#content-b">Section B</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
