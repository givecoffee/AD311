import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-icon">⬡</span>
          <span>ModularApp</span>
        </div>
        <p className="footer-tagline">
          Built with React — default &amp; named exports in harmony.
        </p>
        <p className="footer-copy">© {year} ModularApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
