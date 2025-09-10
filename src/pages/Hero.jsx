import "./Hero.css";
import mountain from "../assets/images/mountain.jpg";
import airplane from "../assets/images/airplane.jpg";
import beach from "../assets/images/beach.jpg";
import desert from "../assets/images/desert.jpg";
import forest from "../assets/images/forest.jpg";
import road from "../assets/images/road.jpg";
import city from "../assets/images/city.jpg";

function Hero() {
  return (
    <section className="hero-mosaic">

      <div className="mosaic-grid">
        <div className="box m"><img src={mountain} alt="mountain" /></div>
        <div className="box a"><img src={airplane} alt="airplane" /></div>
        <div className="box b"><img src={beach} alt="beach" /></div>
        <div className="box d"><img src={desert} alt="desert" /></div>
        <div className="box r"><img src={road} alt="road" /></div>
        <div className="box c"><img src={city} alt="city" /></div>
        <div className="box f"><img src={forest} alt="forest" /></div>
      </div>
      {/* <div className="hero-overlay">
        <h1>Hop The Miles</h1>
        <p>Discover the world, one journey at a time 🌍✈️</p>
        <button className="cta-btn">Start Exploring</button>
      </div> */}
    </section>
  );
}

export default Hero;
