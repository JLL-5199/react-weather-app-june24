import React from "react";
import "./weather.css";

export default function Weather(){
    return(
        <div className="weather">
            <form>
            <div className="row">
                <div className="col-9"><input type="search" placeholder="enter a city" className="form-control"/></div>
                <div className="col-3"><input type="submit" value="Search" className="bt btn-primary"/></div>
            </div>
            </form>
            <h1>Hello from Weather</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly cloudy"/>
                    6°C | °F
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation</li>
                        <li>Humidity</li>
                        <li>Wind</li>
                    </ul>
                </div>
            </div>
        </div>


    )
}