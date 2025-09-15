import Destinations from "./Destinations";
import Hero from "./Hero";
import "./Home.css";
import MasterBanner from "./MasterBanner";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <MasterBanner />
      </section>
      <section className="destination">
        <Destinations />
      </section>

      <section className="hero">
        <Hero />
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="card">
          <h3>✈️ Flights</h3>
          <p>Find the best routes and fares for your next trip.</p>
        </div>
        <div className="card">
          <h3>🏨 Hotels</h3>
          <p>Stay in comfort with curated stays around the world.</p>
        </div>
        <div className="card">
          <h3>🚗 Cars</h3>
          <p>Rent rides easily for seamless local travel.</p>
        </div>
        <div className="card">
          <h3>🌍 Adventures</h3>
          <p>Experience unique activities wherever you go.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Launching Soon 🚀</h2>
        <p>Be the first to know when we launch. Exciting journeys await!</p>
        <button className="btn notify">Stay Updated</button>
      </section>


    </div>
  );
}

export default Home;
