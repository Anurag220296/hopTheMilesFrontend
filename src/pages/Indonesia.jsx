import "./Indonesia.css";
import flag from "../assets/images/indonesia-flag.jpeg";
import bali from "../assets/images/bali.jpg";
import borobudur from "../assets/images/borobudur.jpg";
import komodo from "../assets/images/komodo.jpg";
import rajaAmpat from "../assets/images/rajaAmpat.jpg";
import jakarta from "../assets/images/jakarta.jpg";

export default function Indonesia() {
  return (
    <section className="indonesia-page">
      {/* Hero Section */}
      <div className="indonesia-hero">
        <img src={flag} alt="Indonesia Flag" className="hero-flag" />
        <div className="hero-text">
          <h1>Incredible Indonesia</h1>
          <p>Islands of endless wonders</p>
        </div>
      </div>

      {/* Collage Section */}
      <div className="indonesia-collage">
        <div className="collage-item large" style={{ backgroundImage: `url(${bali})` }}>
          <span>Bali</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${borobudur})` }}>
          <span>Borobudur</span>
        </div>
        <div className="collage-item wide" style={{ backgroundImage: `url(${komodo})` }}>
          <span>Komodo Island</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${rajaAmpat})` }}>
          <span>Raja Ampat</span>
        </div>
        <div className="collage-item tall" style={{ backgroundImage: `url(${jakarta})` }}>
          <span>Jakarta</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="indonesia-info">
        <h2>Why Visit Indonesia?</h2>
        <p>
          With over 17,000 islands, Indonesia is a paradise of beaches, volcanoes, and cultural diversity. 
          From Bali’s serene temples to Komodo’s unique wildlife, every corner offers a different adventure.
        </p>
      </div>
    </section>
  );
}
