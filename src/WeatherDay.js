import React from "react";

export default function WeatherDay(props){

    function maxTemperature(){
        let temperature= Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature= Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function dayName(){
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

return(
    <div className="weatherForecastDay">
                        <div className="forecastDay">{dayName()}</div>
                        <img src={props.data.condition.icon_url} size={36}/>
                        <div className="WeatherForecast-temperatures">
                            <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                            <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
                        </div>
    </div>
)

}