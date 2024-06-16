import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import "./weather.css";

export default function Weather(props){
const [weatherData, setWeatherData]=useState({ready:false});

function handleSearch(response){
    console.log(response.data);
    setWeatherData({
        ready:true,
        temperature:response.data.main.temp,
        wind: response.data.wind.speed,
        city:response.data.name,
        humidity: response.data.main.humidty,
        icon:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        description: response.data.weather[0].description,
        date: new Date(response.data.dt*1000)
    })
}
    

if (weatherData.ready){

return(
        <div className="Weather">
            <form>
            <div className="row">
                <div className="col-9"><input type="search" placeholder="enter a city" className="form-control" autoFocus="on"/></div>
                <div className="col-3"><input type="submit" value="Search" className="bt btn-primary w-100"/></div>
            </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li><FormattedDate date={weatherData.date}/></li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                        <img src={weatherData.icon} alt={weatherData.description}/>
                        <span className="degree">{Math.round(weatherData.temperature)}</span><span className="units">°C | °F</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation:</li>
                        <li>Humidity: {weatherData.humidity}</li>
                        <li>Wind: {weatherData.wind}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
} else {
const apiKey="f3009e4852fa0a079dab291dabf020c4"; 
let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(handleSearch);

return "Loading...";

}
}