import React, { useState } from "react";
import "./Auth.css";

const users = [
  { name: "Anurag", passcode: "A7F2-9C1D-4B8E-3D5F" },
  { name: "Shreya", passcode: "6B2C-8A1E-9F4D-7E3B" },
  { name: "Admin", passcode: "D3F8-5A2B-1C9E-6F4A" },
];


export default function DashboardLogin({ onLogin }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedUser = users.find((u) => u.passcode === input.trim());
    if (matchedUser) {
      onLogin(matchedUser.name);
    } else {
      setError("Invalid passcode!");
    }
  };

  return (
    <div className="auth-container">
      {/* Left panel */}
      <div className="auth-left">
        <h1>HopTheMiles</h1>
        <p>Welcome! Enter your passcode to access the dashboard.</p>
      </div>

      {/* Right panel */}
      <div className="auth-right">
        <h2>Dashboard Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="password"
            name="passcode"
            placeholder="Enter Passcode"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Enter
          </button>
        </form>

        {error && <p className="auth-error">{error}</p>}

        <p className="auth-note">
          If you don't have a passcode, please contact the administrator.
        </p>
      </div>
    </div>
  );
}
