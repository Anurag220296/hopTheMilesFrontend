import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="brand">
          <div className="badge" aria-hidden="true">✈️</div>
          <div>
            <div className="brand-name">
              Hop The <span className="brand-mile">Miles</span>
            </div>
            <div className="tagline">Travel. Discover. Repeat.</div>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-right">
          <a className="email" href="mailto:info@hopthemiles.com">info@hopthemiles.com</a>
          <div className="copyright">
            © {year} Hop The Miles. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
