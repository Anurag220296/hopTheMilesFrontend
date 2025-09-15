import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth(); // use context
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login(form.email, form.password);

    if (res.success) {
      alert("✅ Login successful!");
      setForm({ email: "", password: "" });
      navigate("/"); // redirect to home
    } else {
      alert(`❌ Login failed: ${res.message}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>HopTheMiles</h1>
        <p>Welcome back! Let’s plan your next ride 🚗</p>
      </div>

      <div className="auth-right">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">
            Login
          </button>
        </form>

        <p className="auth-link">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
        <p className="auth-link">
          <a href="/forgotpassword">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
