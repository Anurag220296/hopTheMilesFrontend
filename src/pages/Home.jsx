import Destinations from "./Destinations";
import Hero from "./Hero";
import "./Home.css";
import MasterBanner from "./MasterBanner";
import SpinWheel from "./SpinWheel";
import india from '../assets/images/india.jpg';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <MasterBanner />
      </section>


      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Hop The Miles?</h2>
        <p className="subtitle">
          We make your journeys smooth, safe and unforgettable ✨
        </p>

        <div className="features">
          <div className="feature-card">
            <div className="icon">🛡️</div>
            <h3>Safe & Secure</h3>
            <p>Verified drivers and vehicles to ensure a worry-free experience.</p>
          </div>
          <div className="feature-card">
            <div className="icon">⏱️</div>
            <h3>On-Time Rides</h3>
            <p>We value your time — punctual pickups and seamless transfers.</p>
          </div>
          <div className="feature-card">
            <div className="icon">💸</div>
            <h3>Transparent Pricing</h3>
            <p>No hidden charges — clear and fair pricing every time.</p>
          </div>
          <div className="feature-card">
            <div className="icon">💬</div>
            <h3>24/7 Support</h3>
            <p>Our team is always available to help you on your journey.</p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="destination">
        <Destinations />
      </section>
      {/* Testimonials */}
      <section className="testimonials">
        <h2>Happy Travellers ❤️</h2>
        <p className="subtitle">
          Thousands of journeys, countless memories — hear from our travellers
        </p>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="quote">“</div>
            <p>
              Our trip from Delhi to Jaipur was flawless! Comfortable ride,
              polite driver and on-time service. Highly recommended.
            </p>
            <div className="user">
              <div>
                <h4>Amit Sharma</h4>
                <span>Business Traveller</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote">“</div>
            <p>
              Amazing experience! Booking was super easy and everything went
              perfectly as planned. Will book again.
            </p>
            <div className="user">
              <div>
                <h4>Priya Verma</h4>
                <span>Solo Traveller</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote">“</div>
            <p>
              Clean cars, friendly staff and smooth communication. Our family
              trip was made special because of them!
            </p>
            <div className="user">
              <div>
                <h4>Rahul & Neha</h4>
                <span>Family Vacation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Memories */}
      <section className="travel-gallery">
        <h2>Travel Memories 📸</h2>

        <div className="gallery-grid">
          <div className="gallery-item"><img src={india} alt="Travel" /></div>
          <div className="gallery-item tall"><img src={india} alt="Travel" /></div>
          <div className="gallery-item"><img src={india} alt="Travel" /></div>
          <div className="gallery-item"><img src={india} alt="Travel" /></div>
          <div className="gallery-item"><img src={india} alt="Travel" /></div>
          <div className="gallery-item wide"><img src={india} alt="Travel" /></div>
          <div className="gallery-item"><img src={india} alt="Travel" /></div>
          <div className="gallery-item"><img src={india} alt="Travel" /></div>
          <div className="gallery-item"><img src={india} alt="Travel" /></div>
          <div className="gallery-item"><img src={india} alt="Travel" /></div>
        </div>
      </section>


      {/* Popular Routes */}
      <section className="popular-routes">
        <h2>Our Popular Routes 🌏</h2>
        <p className="subtitle">
          Explore the journeys our travellers love the most
        </p>

        <div className="routes-grid">

          <div className="route-card">
            <h3>Mumbai → Goa</h3>
            <p>Sunny beaches, vibrant nightlife, and a relaxed vibe.</p>
          </div>

          <div className="route-card">
            <h3>Jaipur → Udaipur</h3>
            <p>Royal palaces, colorful markets, and scenic landscapes.</p>
          </div>

          <div className="route-card">
            <h3>Singapore Airport → Marina Bay</h3>
            <p>Swift transfers from runway to the city’s shining heart.</p>
          </div>

          <div className="route-card">
            <h3>Ubud → Seminyak</h3>
            <p>Relaxing ride from Bali’s cultural core to its beachside charm.</p>
          </div>

          <div className="route-card">
            <h3>Dubai Airport → Downtown Dubai</h3>
            <p>Luxury ride straight to the iconic Burj Khalifa district.</p>
          </div>

          <div className="route-card">
            <h3>Hanoi → Ha Long Bay</h3>
            <p>Scenic journey from bustling streets to tranquil waters.</p>
          </div>

          <div className="route-card">
            <h3>Jakarta → Bandung</h3>
            <p>Escape city rush to West Java’s cool mountain vibes.</p>
          </div>

          <div className="route-card">
            <h3>Da Nang → Hoi An</h3>
            <p>Short, scenic coastal route to Vietnam’s lantern town.</p>
          </div>

          <div className="route-card">
            <h3>Abu Dhabi → Dubai</h3>
            <p>Comfortable desert highway ride between UAE’s gems.</p>
          </div>

        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <Hero />
      </section>

      {/* Highlights */}
      {/* <section className="highlights">
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
      </section> */}

      {/* WHEEL */}
      {/* <section className="wheel">
        <SpinWheel />
      </section> */}

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
