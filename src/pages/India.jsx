import "./India.css";
import flag from "../assets/images/india-flag.jpg";
import taj from "../assets/images/india.jpg";
import himalaya from "../assets/images/himalaya.jpg";
import mumbai from "../assets/images/mumbai.jpg";
import kerala from "../assets/images/kerala.jpg";
import desert from "../assets/images/desert.jpg";

export default function India() {
  return (
    <section className="india-page">
      {/* Hero Section */}
      <div className="india-hero">
        <img src={flag} alt="India Flag" className="hero-flag" />
        <div className="hero-text">
          <h1>Incredible India</h1>
          <p>Where tradition meets modernity</p>
        </div>
      </div>

      {/* Collage Section */}
      <div className="india-collage">
        <div className="collage-item large" style={{ backgroundImage: `url(${taj})` }}>
          <span>Taj Mahal</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${himalaya})` }}>
          <span>Himalayas</span>
        </div>
        <div className="collage-item wide" style={{ backgroundImage: `url(${mumbai})` }}>
          <span>Mumbai</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${kerala})` }}>
          <span>Kerala</span>
        </div>
        <div className="collage-item tall" style={{ backgroundImage: `url(${desert})` }}>
          <span>Rajasthan</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="india-info">
        <h2>Why Visit India?</h2>
        <p>
          India is a vibrant blend of cultures, landscapes, and traditions. From the snowy peaks of the Himalayas to
          the sunny beaches of Goa, bustling streets of Mumbai to the serene backwaters of Kerala — India is a journey
          through time and diversity.
        </p>
      </div>
    </section>
  );
}
