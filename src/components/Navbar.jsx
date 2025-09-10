import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AnimatedScene from "./AnimatedScene";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [planePos, setPlanePos] = useState({ top: 10, left: 50 });

  // Move plane randomly every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const top = Math.floor(Math.random() * 40) + 5;   // random within navbar height
      const left = Math.floor(Math.random() * 80) + 10; // random within navbar width
      setPlanePos({ top, left });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      {/* Brand (Logo → Home) */}
      <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
        <span className="badge">✈️</span>
        <h1>
          Hop <span className="highlight">The Miles</span>
        </h1>
      </Link>

      {/* Hamburger (mobile) */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Links (Right side) */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>

        <AnimatedScene />
    </nav>
  );
}

export default Navbar;
