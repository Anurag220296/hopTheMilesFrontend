import { useState, useEffect } from "react";
import "./MasterBanner.css";
import mountain from "../assets/images/mountain.jpg";
import beach from "../assets/images/beach.jpg";
import road from "../assets/images/road.jpg";
import city from "../assets/images/city.jpg";
const banners = [
  {
    img: mountain,
    title: "Explore the Mountains",
    subtitle: "Adventure begins here"
  },
  {
    img: beach,
    title: "Relax by the Beaches",
    subtitle: "Find your calm waves"
  },
  {
    img: city,
    title: "Wander the City Streets",
    subtitle: "Discover urban wonders"
  },
  {
    img: road,
    title: "Drive Endless Roads",
    subtitle: "Journey never ends"
  }
];

export default function MasterBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="master-banner">
      {banners.map((b, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${b.img})` }}
        >
          <div className="overlay">
            <h1>{b.title}</h1>
            <p>{b.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="dots">
        {banners.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
