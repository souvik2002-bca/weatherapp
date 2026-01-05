import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [cityName, setCityName] = useState('');
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
  let API_KEY = "f83490b428af4df42c1cf855ce0b8450";

  let fetchWeather = async (city) => {
    try {
      setError(false);

      let response = await fetch(
        `${API_URL}${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      let data = await response.json();

      let result = {
        temp: data.main.temp,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
        feelslike: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        windspeed: data.wind.speed,
        city: data.name,
      };

      updateInfo(result);
    } catch (err) {
      setError(true);
    }
  };

  let handleChange = (event) => {
    setCityName(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(cityName);
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="cityName"
          label="City Name"
          variant="outlined"
          value={cityName}
          onChange={handleChange}
          required
        />

        <br /><br />

        <Button variant="contained" type="submit">
          Send
        </Button>

        {error && (
          <p style={{ color: 'red' }}>
            Error fetching weather data. Please check the city name.
          </p>
        )}
      </form>
    </div>
  );
}
