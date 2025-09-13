import React, { useState } from "react";
import "./Order.css";
import India from "../assets/images/india.jpg";
import Saudi from "../assets/images/saudi.jpg";
import Vietnam from "../assets/images/vietnam.jpg";
import Singapore from "../assets/images/singapore.jpg";
import Indonesia from "../assets/images/indonesia.jpg";
import Oman from "../assets/images/oman.jpg";
export default function OrderForm() {
  const [stops, setStops] = useState([
    { pickup: "", drop: "", datetime: "", type: "" },
  ]);

  const addStop = () => {
    setStops([...stops, { pickup: "", drop: "", datetime: "", type: "" }]);
  };

  const handleStopChange = (index, field, value) => {
    const updated = [...stops];
    updated[index][field] = value;
    setStops(updated);
  };

  return (
    <section className="order-section">
      {/* Background images */}
      <div className="background-images">
        <img src={India} alt="" />
        <img src={Saudi} alt="" />
        <img src={Oman} alt="" />
        <img src={Vietnam} alt="" />
        <img src={Singapore} alt="" />
        <img src={Indonesia} alt="" />
        <img src={India} alt="" />
        <img src={Saudi} alt="" />
        <img src={Oman} alt="" />
        <img src={Vietnam} alt="" />
        <img src={Singapore} alt="" />
        <img src={Indonesia} alt="" />
        <img src={India} alt="" />
        <img src={Saudi} alt="" />
        <img src={Oman} alt="" />
        <img src={Vietnam} alt="" />
        <img src={Singapore} alt="" />
        <img src={Indonesia} alt="" />
        <img src={India} alt="" />
        <img src={Saudi} alt="" />
        <img src={Oman} alt="" />
        <img src={Vietnam} alt="" />
        <img src={Singapore} alt="" />
        <img src={Indonesia} alt="" />
      </div>

      {/* Form */}
      <div className="order-form">
        <h2>Book Your Ride</h2>
        <p>Fill in the details below to schedule your trip</p>

        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="tel" placeholder="Alternative Phone Number" />
          </div>

          {stops.map((stop, i) => (
            <div key={i} className="stop-card">
              <div className="group">
                <input
                  type="text"
                  placeholder="Pickup Location"
                  value={stop.pickup}
                  onChange={(e) =>
                    handleStopChange(i, "pickup", e.target.value)
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Drop Location"
                  value={stop.drop}
                  onChange={(e) =>
                    handleStopChange(i, "drop", e.target.value)
                  }
                  required
                />
              </div>

              <div className="group">
                <input
                  type="datetime-local"
                  value={stop.datetime}
                  onChange={(e) =>
                    handleStopChange(i, "datetime", e.target.value)
                  }
                  required
                />
                <select
                  value={stop.type}
                  onChange={(e) =>
                    handleStopChange(i, "type", e.target.value)
                  }
                  required
                >
                  <option value="">Select Type</option>
                  <option value="sharing">Sharing</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="add-stop"
            onClick={addStop}
          >
            + Add Another Stop
          </button>

          <button type="submit" className="submit-btn">
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
}
