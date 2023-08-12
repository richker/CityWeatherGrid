import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedCityState, temperatureUnitState } from '../../state';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { City, WeatherData } from '../../types';
import './CityDetails.css';

const CityDetails: React.FC = () => {
  const selectedCity = useRecoilValue(selectedCityState) as City;
  const [temperatureUnit, setTemperatureUnit] = useRecoilState(temperatureUnitState);
  const navigate = useNavigate();

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: `${selectedCity?.coords.lat},${selectedCity?.coords.lng}` },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const { data, error, loading } = useAxios(options);

  const toggleTemperatureUnit = () => {
    setTemperatureUnit(prevUnit => prevUnit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="city-details">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <>
          <h2>{selectedCity?.name}, {selectedCity?.country}</h2>
          <img src={selectedCity?.image} alt={selectedCity?.name} className="city-image" />
          <p>{selectedCity?.description}</p>
          <p>Temperature: {temperatureUnit === 'metric' ? data.current.temp_c : data.current.temp_f}°{temperatureUnit === 'metric' ? 'C' : 'F'}</p>
          <p>Feels Like: {temperatureUnit === 'metric' ? data.current.feelslike_c : data.current.feelslike_f}°{temperatureUnit === 'metric' ? 'C' : 'F'}</p>
          <p>Weather: {data.current.condition.text}</p>
          <img src={data.current.condition.icon} alt={data.current.condition.text} className="weather-icon" />
          <p>Humidity: {data.current.humidity}%</p>
          <p>Wind: {data.current.wind_kph} kph ({data.current.wind_dir})</p>
          <button onClick={toggleTemperatureUnit}>Toggle °C/°F</button>
          <button onClick={() => navigate(-1)} className="back-button">Back</button>
        </>
      )}
    </div>
  );
};

export default CityDetails;
