import React from "react";
import "./About.css";
import team from "../assets/images/team.jpg";
import journey from "../assets/images/journey.jpg";

export default function About() {
  return (
    <div className="about">
      {/* Section 1: Hero Intro */}
      <section className="about-hero">
        <h1>About Hop The Miles</h1>
        <p>
          We are explorers at heart, curating journeys that spark wonder,
          connection, and unforgettable memories across the globe.
        </p>
      </section>

      {/* Section 2: Our Journey */}
      <section className="about-journey">
        <div className="about-text">
          <h2>Our Journey</h2>
          <p>
            Born from a love for travel, Hop The Miles started as a small travel
            blog and evolved into a global community of travel enthusiasts.
            We’re on a mission to make travel more personal, accessible, and
            exciting for everyone.
          </p>
        </div>
        <div className="about-img">
          <img src={journey} alt="Our journey" />
        </div>
      </section>

      {/* Section 3: Our Team */}
      <section className="about-team">
        <div className="about-img">
          <img src={team} alt="Our team" />
        </div>
        <div className="about-text">
          <h2>Meet the Team</h2>
          <p>
            A passionate team of creators, travelers, and storytellers working
            together to bring the world closer to you, one adventure at a time.
          </p>
        </div>
      </section>

      {/* Section 4: Mission Statement */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To inspire meaningful travel by building authentic experiences,
          connecting cultures, and creating lifelong memories for everyone.
        </p>
      </section>
    </div>
  );
}
