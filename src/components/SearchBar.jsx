import React, { useState } from "react";
import "./SearchBar.css";

// onSearch — called with the city string when the user submits
// history  — array of recent city names shown as clickable chips
export default function SearchBar({ onSearch, history }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();         // prevent full page reload on form submit
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");              // clear input after search
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)} // controlled input
          placeholder="Enter city name..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Render history chips only if there are previous searches */}
      {history.length > 0 && (
        <div className="search-history">
          {history.map((item) => (
            // Clicking a chip re-runs the search for that city
            <button key={item} className="history-chip" onClick={() => onSearch(item)}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
