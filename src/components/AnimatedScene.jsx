import { useEffect, useState } from "react";
import "./AnimatedScene.css";

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function AnimatedScene() {
  const [planes, setPlanes] = useState([]);
  const [balloons, setBalloons] = useState([]);
  const [cars, setCars] = useState([]);

  // Generate random objects
  useEffect(() => {
    // Planes
    const planeArr = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: getRandom(10, 50), // vertical position
      speed: getRandom(10, 25), // seconds to cross
      angle: getRandom(-15, 15), // tilt angle
      delay: getRandom(0, 10), // staggered start
    }));
    setPlanes(planeArr);

    // Balloons
    const balloonArr = Array.from({ length: 21 }).map((_, i) => ({
      id: i,
      left: getRandom(5, 80),
      speed: getRandom(15, 25),
      delay: getRandom(0, 5),
    }));
    setBalloons(balloonArr);

    // Cars
    const carArr = Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      bottom: getRandom(0, 20),
      speed: getRandom(8, 15),
      delay: getRandom(0, 10),
    }));
    setCars(carArr);
  }, []);

  return (
    <div className="animated-scene">
      {/* Airplanes */}
      {planes.map((p) => (
        <div
          key={p.id}
          className="plane"
          style={{
            top: `${p.top}%`,
            animationDuration: `${p.speed}s`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.angle}deg)`,
          }}
        >
          ✈️
        </div>
      ))}

      {/* Balloons */}
      {balloons.map((b) => (
        <div
          key={b.id}
          className="balloon"
          style={{
            left: `${b.left}%`,
            animationDuration: `${b.speed}s`,
            animationDelay: `${b.delay}s`,
          }}
        >
          🎈
        </div>
      ))}

      {/* Cars */}
      {cars.map((c) => (
        <div
          key={c.id}
          className="car"
          style={{
            bottom: `${c.bottom}px`,
            animationDuration: `${c.speed}s`,
            animationDelay: `${c.delay}s`,
          }}
        >
          🚗
        </div>
      ))}
    </div>
  );
}

export default AnimatedScene;
