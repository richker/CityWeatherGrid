import React from 'react';
import { CurrentWeather } from '../../types';

interface Props {
  weather: CurrentWeather;
  unit: 'metric' | 'imperial';
  toggleUnit: () => void;
}

const WeatherDisplay: React.FC<Props> = ({ weather, unit, toggleUnit }) => {
  const currentCondition = weather.condition;

  return (
    <>
      <p>Temperature: {unit === 'metric' ? weather.temp_c : weather.temp_f}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Feels Like: {unit === 'metric' ? weather.feelslike_c : weather.feelslike_f}°{unit === 'metric' ? 'C' : 'F'}</p>
      <button onClick={toggleUnit}>Toggle °C/°F</button>
      {currentCondition && (
        <>
          <p>Weather: {currentCondition.text}</p>
          <img src={currentCondition.icon} alt={currentCondition.text} className="weather-icon" />
        </>
      )}
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind: {weather.wind_kph} kph ({weather.wind_degree}° {weather.wind_dir})</p>
    </>
  );
};

export default WeatherDisplay;
