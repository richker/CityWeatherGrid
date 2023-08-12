/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import WeatherDisplay from './WeatherDisplay';
import { CurrentWeather } from '../../types';

const mockWeather = {
  temp_c: 20,
  temp_f: 68,
  feelslike_c: 18,
  feelslike_f: 64.4,
  humidity: 80,
  wind_kph: 10,
  wind_degree: 180,
  wind_dir: "S",
  condition: {
    text: "clear sky",
    icon: "sample-icon-url",
    code: 1000
  }
} as CurrentWeather;

test('renders WeatherDisplay component', () => {
  render(<WeatherDisplay weather={mockWeather} unit="metric" toggleUnit={() => {}} />);
});

test('displays temperature in Celsius', () => {
  const { getByText } = render(<WeatherDisplay weather={mockWeather} unit="metric" toggleUnit={() => {}} />);
  expect(getByText('Temperature: 20°C')).toBeInTheDocument();
});

test('displays temperature in Fahrenheit when toggled', () => {
  const { getByText } = render(<WeatherDisplay weather={mockWeather} unit="imperial" toggleUnit={() => {}} />);
  expect(getByText('Temperature: 68°F')).toBeInTheDocument();
});

test('toggles temperature unit when button is clicked', () => {
  const toggleUnit = jest.fn();
  const { getByRole } = render(<WeatherDisplay weather={mockWeather} unit="metric" toggleUnit={toggleUnit} />);
  const button = getByRole('button', { name: /Toggle °C\/°F/i });
  fireEvent.click(button);
  expect(toggleUnit).toHaveBeenCalledTimes(1);
});

test('displays weather description and icon', () => {
  const { getByText, getByAltText } = render(<WeatherDisplay weather={mockWeather} unit="metric" toggleUnit={() => {}} />);
  expect(getByText('Weather: clear sky')).toBeInTheDocument();
  const icon = getByAltText('clear sky');
  expect(icon).toHaveAttribute('src', 'sample-icon-url');
});

test('displays humidity and wind details', () => {
  const { getByText } = render(<WeatherDisplay weather={mockWeather} unit="metric" toggleUnit={() => {}} />);
  expect(getByText('Humidity: 80%')).toBeInTheDocument();
  expect(getByText('Wind: 10 kph (180° S)')).toBeInTheDocument();
});
