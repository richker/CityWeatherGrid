import React from 'react';
import { CurrentWeather } from '../../types';

interface Props {
  weather: CurrentWeather;
  unit: 'metric' | 'imperial';
  toggleUnit: () => void;
}

const WeatherDisplay: React.FC<Props> = ({ weather, unit, toggleUnit }) => {
  const currentWeather = weather.weather && weather.weather[0];

  return (
    <>
      <p>Temperature: {unit === 'metric' ? weather.temp : weather.temp * 9/5 + 32}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Feels Like: {unit === 'metric' ? weather.feels_like : weather.feels_like * 9/5 + 32}°{unit === 'metric' ? 'C' : 'F'}</p>
      <button onClick={toggleUnit}>Toggle °C/°F</button>
      {currentWeather && (
        <>
          <p>Weather: {currentWeather.description}</p>
          <img src={currentWeather.icon} alt={currentWeather.description} className="weather-icon" />
        </>
      )}
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind: {weather.wind_speed} kph ({weather.wind_deg}°)</p>
    </>
  );
};

export default WeatherDisplay;
