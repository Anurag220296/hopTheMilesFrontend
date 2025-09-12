import { useNavigate } from "react-router-dom";
import "./Destinations.css";
import indiaImg from "../assets/images/india.jpg";
import saudiImg from "../assets/images/saudi.jpg";
import singaporeImg from "../assets/images/singapore.jpg";
import vietnamImg from "../assets/images/vietnam.jpg";
import indonesiaImg from "../assets/images/indonesia.jpg";
import omanImg from "../assets/images/oman.jpg";
import qatarImg from "../assets/images/qatar.jpg";

const countries = [
  { name: "India", img: indiaImg, path: "/india" },
  { name: "Saudi Arabia", img: saudiImg, path: "/saudi" },
  { name: "Singapore", img: singaporeImg, path: "/singapore" },
  { name: "Vietnam", img: vietnamImg, path: "/vietnam" },
  { name: "Indonesia", img: indonesiaImg, path: "/indonesia" },
  { name: "Oman", img: omanImg, path: "/Oman" },
  { name: "Qatar", img: qatarImg, path: "/Oman" },
  { name: "Comming Soon", img: indonesiaImg, path: "/Oman" },
];

export default function Destinations() {
  const navigate = useNavigate();

  return (
    <section className="destinations">
      <h2 className="dest-title">Our Destinations</h2>
      <div className="dest-grid">
        {countries.map((c) => (
          <div
            key={c.name}
            className="dest-card"
            style={{ backgroundImage: `url(${c.img})` }}
            onClick={() => navigate(c.path)}
          >
            <div className="dest-overlay">
              <h3>{c.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
