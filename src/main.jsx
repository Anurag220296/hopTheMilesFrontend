import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import India from "./pages/India";
import Saudi from "./pages/Saudi";
import Vietnam from "./pages/Vietnam";
import Singapore from "./pages/Singapore";
import Indonesia from "./pages/Indonesia";
import Oman from "./pages/Oman";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="india" element={<India />} />
        <Route path="saudi" element={<Saudi />} />
        <Route path="vietnam" element={<Vietnam />} />
        <Route path="singapore" element={<Singapore />} />
        <Route path="oman" element={<Oman />} />
        <Route path="indonesia" element={<Indonesia />} />

      </Route>
    </Routes>
  </BrowserRouter>
);
