import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherDay from "./WeatherDay.js"
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    let [loaded, setLoaded]= useState(false);
    let [forecast, setForecast]= useState(null);

    useEffect(()=>{
        setLoaded(false);
    }, [props.coordinates])

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index){
                    if (index<5){
                        return(<div className="col" key={index}>
                        <WeatherDay data={dailyForecast}/>
                    </div>
                        )
                    } else {return (<p>Forecast Loading...</p>)}
                    })}
                </div>
            </div>
        )

    }
    else {
        let apiKey="7a45btfdd9a2a5b0bb56a376f3of7ede";
        let longitude = props.coordinates.longitude;
        let latitude= props.coordinates.latitude;
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
           
        return null;
    }
}