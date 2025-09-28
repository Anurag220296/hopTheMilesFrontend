import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SpinWheel.css";
import india from '../assets/images/india.jpg';
import saudi from '../assets/images/saudi.jpg';
import vietnam from '../assets/images/vietnam.jpg';
import singapore from '../assets/images/singapore.jpg';
import indonesia from '../assets/images/indonesia.jpg';
import oman from '../assets/images/oman.jpg';
import { FaGlobe, FaGlobeAsia, FaCompass } from "react-icons/fa";


export default function SpinWheel() {
    const navigate = useNavigate();

    const nations = [
        {
            name: "India",
            path: "/india",
            color: "#e67e22",
            bg: india,
        },
        {
            name: "Saudi",
            path: "/saudi",
            color: "#27ae60",
            bg: saudi,
        },
        {
            name: "Vietnam",
            path: "/vietnam",
            color: "#f1c40f",
            bg: vietnam,
        },
        {
            name: "Singapore",
            path: "/singapore",
            color: "#3498db",
            bg: singapore,
        },
        {
            name: "Indonesia",
            path: "/indonesia",
            color: "#9b59b6",
            bg: indonesia,
        },
        {
            name: "Oman",
            path: "/oman",
            color: "#e74c3c",
            bg: oman,
        },
    ];

    const slices = nations.length;
    const sliceAngle = 360 / slices;
    const [spinning, setSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [selected, setSelected] = useState(null);
    const wheelRef = useRef(null);

    const spin = () => {
        if (spinning) return;
        setSpinning(true);
        setSelected(null);

        const chosenIndex = Math.floor(Math.random() * slices);
        const spins = Math.floor(Math.random() * 4) + 5;
        const midAngle = chosenIndex * sliceAngle + sliceAngle / 2;
        const base = spins * 360 + (360 - midAngle);
        const offset = (Math.random() - 0.5) * (sliceAngle * 0.6);
        const target = base + offset;
        const newRotation = rotation + (target - (rotation % 360));
        setRotation(newRotation);

        setTimeout(() => {
            setSpinning(false);
            setSelected(nations[chosenIndex]);
        }, 4700);
    };

    const goToNation = () => {
        if (selected) navigate(selected.path);
    };

    const cx = 180;
    const cy = 180;
    const r = 160;

    function polarToCartesian(cx, cy, radius, angleDeg) {
        const angleRad = (angleDeg - 90) * (Math.PI / 180.0);
        return {
            x: cx + radius * Math.cos(angleRad),
            y: cy + radius * Math.sin(angleRad),
        };
    }

    function describeSector(cx, cy, radius, startAngle, endAngle) {
        const start = polarToCartesian(cx, cy, radius, endAngle);
        const end = polarToCartesian(cx, cy, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return `M ${cx} ${cy} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
    }

    return (
        <div className="spin-container">
            <div className="wheel-section">
                <h2 className="spin-title">🎡 Spin the Wheel</h2>
                <div className="wheel-visual">
                    <svg
                        viewBox="0 0 360 360"
                        width="360"
                        height="360"
                        className={`wheel-svg ${spinning ? "spinning" : ""}`}
                    >
                        <g
                            ref={wheelRef}
                            className="wheel-group"
                            style={{
                                transform: `rotate(${rotation}deg)`,
                                transformOrigin: "180px 180px",
                                transition: spinning
                                    ? "transform 4.7s cubic-bezier(.17,.85,.38,1)"
                                    : "transform 0.6s ease",
                            }}
                        >
                            {nations.map((nation, i) => {
                                const startAngle = i * sliceAngle;
                                const endAngle = startAngle + sliceAngle;
                                const pathD = describeSector(cx, cy, r, startAngle, endAngle);
                                const midAngle = startAngle + sliceAngle / 2;
                                const textPos = polarToCartesian(cx, cy, r * 0.62, midAngle);
                                let textRotation = midAngle;
                                if (textRotation > 90 && textRotation < 270) textRotation += 180;

                                return (
                                    <g key={i}>
                                        <path
                                            d={pathD}
                                            fill={nation.color}
                                            stroke="#222"
                                            strokeWidth="1"
                                        />
                                        <text
                                            x={textPos.x}
                                            y={textPos.y}
                                            textAnchor="middle"
                                            fontSize="14"
                                            fill="#fff"
                                            style={{
                                                transform: `rotate(${textRotation}deg)`,
                                                transformOrigin: `${textPos.x}px ${textPos.y}px`,
                                            }}
                                        >
                                            {nation.emoji} {nation.name}
                                        </text>
                                    </g>
                                );
                            })}
                            <circle
                                cx={cx}
                                cy={cy}
                                r="48"
                                fill="#fff"
                                stroke="#222"
                                strokeWidth="2"
                            />
                            <foreignObject x={cx - 24} y={cy - 24} width="48" height="48">
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                    <FaGlobeAsia size={32} color="#333" />
                                </div>
                            </foreignObject>

                        </g>
                    </svg>
                    <div className="wheel-pointer">▲</div>
                </div>
                <button className="spin-btn" onClick={spin} disabled={spinning}>
                    {spinning ? "Spinning..." : "Spin the Wheel"}
                </button>
            </div>

            <div
                className="result-section"
                style={{
                    backgroundImage: selected ? `url(${selected.bg})` : "none",
                }}
            >
                {selected ? (
                    <div className="overlay">
                        <h3>
                            {selected.emoji} {selected.name}
                        </h3>
                        <button className="go-btn" onClick={goToNation}>
                            Lets plan for {selected.name}
                        </button>
                    </div>
                ) : (
                    <p className="placeholder">Spin and wait for it 🎯</p>
                )}
            </div>

        </div>
    );
}
