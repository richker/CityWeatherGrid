export type Coords = {
  lat: number;
  lng: number;
};

export type City = {
  name: string;
  continent: string;
  active: boolean;
  country: string;
  description: string;
  image: string;
  coords: Coords;
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CurrentWeather = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
};

export type WeatherData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeather;
};
