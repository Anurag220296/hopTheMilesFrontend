import "./Oman.css";
import flag from "../assets/images/oman-flag.png";
import muscat from "../assets/images/muscat.jpg";
import wahiba from "../assets/images/wahiba.jpg";
import nizwa from "../assets/images/nizwa.jpg";
import jebel from "../assets/images/jebel.jpg";
import salalah from "../assets/images/salalah.jpg";

export default function Oman() {
  return (
    <section className="oman-page">
      {/* Hero Section */}
      <div className="oman-hero">
        <img src={flag} alt="Oman Flag" className="hero-flag" />
        <div className="hero-text">
          <h1>Majestic Oman</h1>
          <p>Where desert meets the sea</p>
        </div>
      </div>

      {/* Collage Section */}
      <div className="oman-collage">
        <div className="collage-item large" style={{ backgroundImage: `url(${muscat})` }}>
          <span>Muscat</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${wahiba})` }}>
          <span>Wahiba Sands</span>
        </div>
        <div className="collage-item wide" style={{ backgroundImage: `url(${nizwa})` }}>
          <span>Nizwa Fort</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${jebel})` }}>
          <span>Jebel Shams</span>
        </div>
        <div className="collage-item tall" style={{ backgroundImage: `url(${salalah})` }}>
          <span>Salalah</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="oman-info">
        <h2>Why Visit Oman?</h2>
        <p>
          Oman offers untouched beauty, historic forts, golden deserts, and stunning coastlines. 
          It’s a peaceful gem of the Arabian Peninsula, where hospitality and heritage go hand in hand.
        </p>
      </div>
    </section>
  );
}
