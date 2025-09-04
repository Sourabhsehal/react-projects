import React, { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "d85d47e94c33aaac2c00d0c8d5328560";

  const fetchWeather = async () => {
    if (!city) return;
    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 via-blue-200 to-indigo-400 p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg tracking-wide">
        🌤 Weather App
      </h1>

      <div className="flex gap-3 mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 p-3 rounded-2xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 hover:bg-blue-700 text-black px-5 py-3 rounded-2xl shadow-lg transition-all duration-300"
        >
          Search
        </button>
      </div>

      {error && (
        <p className="text-red-600 font-medium bg-red-100 px-4 py-2 rounded-xl shadow">
          {error}
        </p>
      )}

      {weather && (
        <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center max-w-sm animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800">{weather.name}</h2>
          <p className="text-lg capitalize text-gray-600 mb-2">
            {weather.weather[0].description}
          </p>
          <p className="text-5xl font-extrabold text-blue-700 mb-4">
            {weather.main.temp}°C
          </p>
          <div className="flex justify-between text-gray-700 font-medium">
            <p>💧 {weather.main.humidity}%</p>
            <p>🌬 {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}
