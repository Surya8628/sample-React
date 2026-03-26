import React, { useState } from "react";
import "./WeatherCard.css";

// Shown while data is loading — grey pulsing placeholder instead of a blank space
export function WeatherSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-line" style={{ width: "50%", height: "1.5rem" }} />
      <div className="skeleton-line" style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
      <div className="skeleton-line" style={{ width: "40%", height: "1rem" }} />
      <div className="skeleton-line" style={{ width: "30%", height: "3.5rem" }} />
      <div className="skeleton-line" style={{ width: "60%", height: "1rem" }} />
    </div>
  );
}

// WeatherAPI returns both temp_c and temp_f — we let the user toggle between them
export default function WeatherCard({ weather }) {
  const [isCelsius, setIsCelsius] = useState(true); // default to Celsius

  const { location, current } = weather;
  const temp = isCelsius ? `${Math.round(current.temp_c)}°C` : `${Math.round(current.temp_f)}°F`;

  return (
    <div className="weather-card">
      <p className="weather-location">{location.name}, {location.country}</p>
      <img
        src={current.condition.icon}
        alt={current.condition.text}
        className="weather-icon"
      />
      <p className="weather-condition">{current.condition.text}</p>
      <p className="weather-temp">{temp}</p>

      {/* Toggle switches the display unit without re-fetching — API gives us both */}
      <button className="temp-toggle" onClick={() => setIsCelsius(!isCelsius)}>
        Switch to {isCelsius ? "°F" : "°C"}
      </button>

      <div className="weather-details">
        <span>Humidity: {current.humidity}%</span>
        <span>Wind: {current.wind_kph} km/h</span>
      </div>
    </div>
  );
}
