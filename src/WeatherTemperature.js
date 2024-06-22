import React, {useState} from "react";

export default function WeatherTemperature(props){
  

    return(
        <div className="temperature">
            <span className="degree">{Math.round(props.celsius)}</span><span className="units">°C </span>
        </div>
    )
}