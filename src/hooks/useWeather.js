import { useState, useEffect } from "react";
import { fetchWeather } from "../api/weather"; // calls the WeatherAPI.com endpoint

const HISTORY_KEY = "weather_search_history";
const MAX_HISTORY = 5;

// Loads saved search history from localStorage (persists across page reloads)
function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) ?? [];
  } catch {
    return [];
  }
}

// Saves a new city to the front of the history list, removing duplicates
function saveToHistory(city, current) {
  const updated = [city, ...current.filter((c) => c.toLowerCase() !== city.toLowerCase())]
    .slice(0, MAX_HISTORY); // keep only the last MAX_HISTORY searches
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  return updated;
}

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState(loadHistory); // initialised from localStorage

  // On first load, try to get the user's location and auto-fetch weather
  useEffect(() => {
    if (!navigator.geolocation) return; // browser doesn't support geolocation — skip
    navigator.geolocation.getCurrentPosition(
      (pos) => search(`${pos.coords.latitude},${pos.coords.longitude}`),
      () => {} // user denied or geolocation failed — silently do nothing
    );
  }, []); // empty array = run once on mount

  async function search(city) {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      // Save the resolved city name (from API response) not the raw input (e.g. lat,lon)
      setHistory((prev) => saveToHistory(data.location.name, prev));
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return { weather, loading, error, history, search };
}
