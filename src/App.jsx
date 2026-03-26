import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard, { WeatherSkeleton } from "./components/WeatherCard";
import { useWeather } from "./hooks/useWeather";
import "./App.css";

export default function App() {
  const { weather, loading, error, history, search } = useWeather();

  // Determines what to show below the search bar
  const showEmpty = !loading && !error && !weather;

  return (
    <div className="app">
      <h1 className="app-title">Weather App</h1>

      {/* history prop lets SearchBar show recent searches as clickable chips */}
      <SearchBar onSearch={search} history={history} />

      {loading && <WeatherSkeleton />}
      {error && <p className="error-message">{error}</p>}
      {weather && !loading && <WeatherCard weather={weather} />}

      {/* First-time visit — guide the user to search or allow location access */}
      {showEmpty && (
        <p className="empty-state">Search for a city, or allow location access to see local weather.</p>
      )}
    </div>
  );
}
