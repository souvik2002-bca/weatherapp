import React from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import './WeatherApp.css';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({
        city: '',
        temp: '',
        humidity: '',
        weather: '',
        feelslike: '',
        temp_min: '',
        temp_max: '',
        windspeed: ''
    });

    let updateWeatherData = (result) => {
        setWeatherData(result);
    }

    return (
        <div className="WeatherApp">
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateWeatherData} />
            <InfoBox info={weatherData} />
        </div>
    );
}