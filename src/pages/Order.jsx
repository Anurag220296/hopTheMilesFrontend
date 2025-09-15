import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // <-- import context
import "./Order.css";
import India from "../assets/images/india.jpg";
import Saudi from "../assets/images/saudi.jpg";
import Vietnam from "../assets/images/vietnam.jpg";
import Singapore from "../assets/images/singapore.jpg";
import Indonesia from "../assets/images/indonesia.jpg";
import Oman from "../assets/images/oman.jpg";

export default function OrderForm() {
  const [stops, setStops] = useState([{ pickup: "", drop: "", datetime: "", type: "" }]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    altPhone: "",
  });

  const { isAuthenticated } = useAuth(); // check login status
  const navigate = useNavigate();

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const addStop = () => setStops([...stops, { pickup: "", drop: "", datetime: "", type: "" }]);

  const handleStopChange = (index, field, value) => {
    const updated = [...stops];
    updated[index][field] = value;
    setStops(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // ✅ get token from localStorage
    if (!token) {
      alert("You must be logged in to book.");
      return navigate("/login");
    }

    const payload = {
      ...formData,
      tripId: null,
      paymentStatus: "pending",
      orderStatus: "order_received",
      stops: stops.map((s) => ({
        pickupLocation: s.pickup,
        dropLocation: s.drop,
        rideType: s.type,
        dateTime: new Date(s.datetime).toISOString(),
      })),
    };

    try {
      const res = await fetch(
        "https://hop-the-miles-backend.vercel.app/api/bookings",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // ✅ attach token
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed to submit booking");

      alert("✅ Booking submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        altPhone: "",
      });
      setStops([{ pickup: "", drop: "", datetime: "", type: "" }]);
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting booking. Please try again.");
    }
  };

  return (
    <section className="order-section">
      {/* Background images */}
      <div className="background-images">
        {[India, Saudi, Oman, Vietnam, Singapore, Indonesia,
          India, Saudi, Oman, Vietnam, Singapore, Indonesia,
          India, Saudi, Oman, Vietnam, Singapore, Indonesia,
          India, Saudi, Oman, Vietnam, Singapore, Indonesia].map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </div>

      {/* Form */}
      <div className="order-form">
        <h2>Book Your Ride</h2>
        <p>Fill in the details below to schedule your trip</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => handleFormChange("firstName", e.target.value)} required />
            <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => handleFormChange("lastName", e.target.value)} required />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => handleFormChange("email", e.target.value)} required />
            <input type="tel" placeholder="Whatsapp Phone Number" value={formData.phone} onChange={(e) => handleFormChange("phone", e.target.value)} required />
            <input type="tel" placeholder="Alternative Phone Number" value={formData.altPhone} onChange={(e) => handleFormChange("altPhone", e.target.value)} />
          </div>

          {stops.map((stop, i) => (
            <div key={i} className="stop-card">
              <div className="group">
                <input type="text" placeholder="Pickup Location" value={stop.pickup} onChange={(e) => handleStopChange(i, "pickup", e.target.value)} required />
                <input type="text" placeholder="Drop Location" value={stop.drop} onChange={(e) => handleStopChange(i, "drop", e.target.value)} required />
              </div>

              <div className="group">
                <input type="datetime-local" value={stop.datetime} onChange={(e) => handleStopChange(i, "datetime", e.target.value)} required />
                <select value={stop.type} onChange={(e) => handleStopChange(i, "type", e.target.value)} required>
                  <option value="">Select Type</option>
                  <option value="shared">Sharing</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>
          ))}
          
          <button type="button" className="add-stop" onClick={addStop}>
            + Add Another Stop
          </button>

          {isAuthenticated ? (
            <button type="submit" className="submit-btn">Submit Booking</button>
          ) : (
            <button type="button" className="submit-btn" onClick={() => navigate("/login")}>
              Login to Book
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
