import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import logo from "../assets/images/logo.jpeg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [planePos, setPlanePos] = useState({ top: 10, left: 50 });
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  // Move plane randomly every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const top = Math.floor(Math.random() * 40) + 5;   // random within navbar height
      const left = Math.floor(Math.random() * 80) + 10; // random within navbar width
      setPlanePos({ top, left });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Brand (Logo → Home) */}
      <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Hop The Miles Logo" className="navbar-logo" />
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
        <li><Link to="/order" onClick={() => setIsOpen(false)}>Booking</Link></li>
        <li><Link to="/wheel" onClick={() => setIsOpen(false)}>Spin Wheel</Link></li>

        {/* Auth buttons */}
        {isAuthenticated ? (
          <>
            <li className="user-name">{user?.first_name || "User"}</li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
