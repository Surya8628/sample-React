// WeatherAPI.com endpoint — returns current weather for a city
// Docs: https://www.weatherapi.com/docs/
const BASE_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`
    // aqi=no skips air quality data we don't need
  );

  if (!response.ok) {
    throw new Error(response.status === 400 ? "City not found" : "Something went wrong");
    // WeatherAPI returns 400 (not 404) for unknown cities
  }

  return response.json();
}
