import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedCityState, temperatureUnitState } from '../../state';
import { useNavigate } from 'react-router-dom';
import { City } from '../../types';
import {useWeatherData} from '../../hooks/useWeatherData';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import './CityDetails.css';

const CityDetails: React.FC = () => {
  const selectedCity = useRecoilValue(selectedCityState) as City;
  const [temperatureUnit, setTemperatureUnit] = useRecoilState(temperatureUnitState);
  const navigate = useNavigate();

  const { data, error, loading } = useWeatherData(selectedCity);

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
          <WeatherDisplay weather={data.current} unit={temperatureUnit} toggleUnit={toggleTemperatureUnit} />
          <button onClick={() => navigate(-1)} className="back-button">Back</button>
        </>
      )}
    </div>
  );
};

export default CityDetails;
