import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./weather.css";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props){
const [weatherData, setWeatherData]=useState({ready:false});
const [city,setCity]=useState(props.defaultCity);

function handleSearch(response){
    console.log(response.data);
    setWeatherData({
        ready:true,
        temperature:response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        date: new Date(response.data.dt * 1000),
        city:response.data.name,
        icon:response.data.weather[0].icon,
        description: response.data.weather[0].description,
        coordinates:response.data.coord,
    })
}

function search(){
const apiKey="f3009e4852fa0a079dab291dabf020c4"; 
let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(handleSearch);

}
    
function handleSubmit(event){
    event.preventDefault();
    //search for a city
    search();
}

function handleCityChange(event){
    setCity(event.target.value);
}

if (weatherData.ready){

return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9"><input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}/></div>
                <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
            </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
    );
} else {
search();
return "Loading...";
}
}