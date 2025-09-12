import "./Singapore.css";
import flag from "../assets/images/singapore-flag.png";
import marina from "../assets/images/marina.jpg";
import gardens from "../assets/images/garden.jpg";
import sentosa from "../assets/images/sentosa.jpg";
import chinatown from "../assets/images/chinatown.jpg";
import merlion from "../assets/images/merlion.jpg";

export default function Singapore() {
  return (
    <section className="singapore-page">
      {/* Hero Section */}
      <div className="singapore-hero">
        <img src={flag} alt="Singapore Flag" className="hero-flag" />
        <div className="hero-text">
          <h1>Stunning Singapore</h1>
          <p>Where modern marvels meet cultural treasures</p>
        </div>
      </div>

      {/* Collage Section */}
      <div className="singapore-collage">
        <div className="collage-item large" style={{ backgroundImage: `url(${marina})` }}>
          <span>Marina Bay Sands</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${gardens})` }}>
          <span>Gardens by the Bay</span>
        </div>
        <div className="collage-item wide" style={{ backgroundImage: `url(${sentosa})` }}>
          <span>Sentosa Island</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${chinatown})` }}>
          <span>Chinatown</span>
        </div>
        <div className="collage-item tall" style={{ backgroundImage: `url(${merlion})` }}>
          <span>Merlion Park</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="singapore-info">
        <h2>Why Visit Singapore?</h2>
        <p>
          Singapore is a dazzling mix of cultures, futuristic architecture, and lush green spaces. From iconic Marina Bay
          to vibrant street markets, world-class gardens to thrilling theme parks — Singapore is a city where innovation
          and tradition coexist in perfect harmony.
        </p>
      </div>
    </section>
  );
}
