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
        temperature:response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        date: new Date(response.data.time * 1000),
        city:response.data.city,
        icon:response.data.condition.icon_url,
        description: response.data.condition.description,
        coordinates:response.data.coordinates,
    })
}

function search(){
const apiKey="7a45btfdd9a2a5b0bb56a376f3of7ede"; 
let apiURL=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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