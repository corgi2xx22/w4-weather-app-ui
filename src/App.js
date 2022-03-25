import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import FormInput from "./FormInput";
import WeatherInfo from "./WeatherInfo";


const api = {
  key: "6beab0a3cac16744d415f22df557ce4a",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchCity, setSearchCity] = useState("Ho Chi Minh");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!searchCity) return;
      setLoading(true);
      try {
        const url = `${api.base}weather?q=${searchCity}&units=metric&appid=${api.key}`;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          setWeatherInfo({
            city: `${data.name}`,
            country: `${data.sys.country}`,
            weather: `${data.weather[0].description}`,
            temperature: `${data.main.temp}`,
            humidity: `${data.main.humidity}`,
            wind: `${data.wind.speed}`,
          });
          setErrorMessage("");
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    fetchWeatherData();
  }, [searchCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchCity(searchInput);
  };
  return (

    <div className="container">
      <Header />
      <FormInput handleSubmit={handleSubmit} setSearchInput={setSearchInput} />
      <WeatherInfo
        loading={loading}
        errorMessage={errorMessage}
        weatherInfo={weatherInfo}
      />
    </div>
  );
}

export default App;
