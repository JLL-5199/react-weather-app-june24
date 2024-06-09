import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    //this allows us to have access to the city, make an api call, update the weather UI
    event.preventDefault();
    let apiKey = `99b8f9330a1bfba3a85e523fd3c2e528`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    //this updates the city variable
    setCity(event.target.value);
  }

  let form = (
    <form id="search-form" class="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        class="form-control form-field"
        id="search-city"
        placeholder="Search a City"
        autocomplete="off"
        onChange={updateCity}
      />
      <button type="submit" class="form-search">
        Search
      </button>
    </form>
  );

  if (result) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} °C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>
            <img src={weather.icon} alt="Weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}