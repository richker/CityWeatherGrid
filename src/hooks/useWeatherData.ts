import useAxios from './useAxios';
import { City } from '../types';

export const useWeatherData = (selectedCity: City) => {
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

  return { data, error, loading };
};
