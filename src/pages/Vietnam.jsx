import "./Vietnam.css";
import flag from "../assets/images/vietnam-flag.jpeg";
import halong from "../assets/images/halong.jpg";
import hanoi from "../assets/images/hanoi.jpg";
import hoian from "../assets/images/hoian.jpg";
import mekong from "../assets/images/mekong.jpeg";
import saigon from "../assets/images/saigon.jpg";

export default function Vietnam() {
  return (
    <section className="vietnam-page">
      {/* Hero Section */}
      <div className="vietnam-hero">
        <img src={flag} alt="Vietnam Flag" className="hero-flag" />
        <div className="hero-text">
          <h1>Vibrant Vietnam</h1>
          <p>Timeless charm meets stunning landscapes</p>
        </div>
      </div>

      {/* Collage Section */}
      <div className="vietnam-collage">
        <div className="collage-item large" style={{ backgroundImage: `url(${halong})` }}>
          <span>Ha Long Bay</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${hanoi})` }}>
          <span>Hanoi</span>
        </div>
        <div className="collage-item wide" style={{ backgroundImage: `url(${hoian})` }}>
          <span>Hoi An</span>
        </div>
        <div className="collage-item small" style={{ backgroundImage: `url(${mekong})` }}>
          <span>Mekong Delta</span>
        </div>
        <div className="collage-item tall" style={{ backgroundImage: `url(${saigon})` }}>
          <span>Ho Chi Minh City</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="vietnam-info">
        <h2>Why Visit Vietnam?</h2>
        <p>
          Vietnam is a land of breathtaking natural beauty and cultural complexities. From the limestone islands of Ha
          Long Bay to the lantern-lit streets of Hoi An, bustling Hanoi to energetic Ho Chi Minh City — Vietnam promises
          unforgettable experiences at every corner.
        </p>
      </div>
    </section>
  );
}
