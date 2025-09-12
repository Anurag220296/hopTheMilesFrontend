import "./Saudi.css";
import flag from "../assets/images/saudi-flag.jpg";
import riyadh from "../assets/images/riyadh.jpg";
import jeddah from "../assets/images/jeddah.jpg";
import madina from "../assets/images/madina.jpg";
import desert from "../assets/images/desert.jpg";
import alula from "../assets/images/alula.jpg";

export default function Saudi() {
  return (
    <section className="saudi-page">
      {/* Hero Section */}
      <div className="saudi-hero">
        <img src={flag} alt="Saudi Arabia Flag" className="hero-flag" />
        <div className="hero-text">
          <h1>Majestic Saudi Arabia</h1>
          <p>Where history and innovation meet</p>
        </div>
      </div>

      {/* Collage Section */}
      <div className="saudi-collage">
        <div className="collage-item large" style={{ backgroundImage: `url(${riyadh})` }}>
          <span>Riyadh</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${jeddah})` }}>
          <span>Jeddah</span>
        </div>
        <div className="collage-item wide" style={{ backgroundImage: `url(${madina})` }}>
          <span>Madina</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${desert})` }}>
          <span>Arabian Desert</span>
        </div>
        <div className="collage-item tall" style={{ backgroundImage: `url(${alula})` }}>
          <span>AlUla</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="saudi-info">
        <h2>Why Visit Saudi Arabia?</h2>
        <p>
          Saudi Arabia offers a unique glimpse into ancient heritage, stunning deserts, and futuristic cities. Explore
          the bustling capital Riyadh, the cultural hub Jeddah, the spiritual heart of Madina, and the awe-inspiring
          rock formations of AlUla — a journey blending tradition with modern marvels.
        </p>
      </div>
    </section>
  );
}
