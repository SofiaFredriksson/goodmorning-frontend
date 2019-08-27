import React from 'react'

export default function WeatherCard(props) {
    console.log(props);
    
    return (
        <div className="weather-card">
            Goodmorning, the weather in 
            <h1>{props.weather.country.toUpperCase()}</h1>
            <p>is mainly {props.weather.description}</p>
            <p>with a temperature of {props.weather.temperature}ºC.</p>
            <p>You can expect highs of {props.weather.temp_max}ºC</p>
            <p>and lows of {props.weather.temp_min}ºC</p>


        </div>
    )
}
