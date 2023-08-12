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

type WeatherCondition = {
  text: string;
  icon: string;
  code: number;
};
export type CurrentWeather = {
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  humidity: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  condition: WeatherCondition;
};