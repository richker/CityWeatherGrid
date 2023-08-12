import React, {ReactElement} from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filteredCitiesSelector, selectedCityState } from "../../state";
import { Link } from 'react-router-dom';
import CityCard from '../CityCard/CityCard';
import { City } from '../../types';
import "./CityGrid.css";

const CityGrid: React.FC = (): ReactElement => {
  const filteredCities = useRecoilValue(filteredCitiesSelector);
  const setSelectedCity = useSetRecoilState(selectedCityState);

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };

  if (filteredCities.length === 0) return <div> No Results :)</div>

  return (
    <div className="city-grid">
      {filteredCities.map(city => (
        <Link to="/city-details" key={city.name}>
          <CityCard city={city} onClick={() => handleCityClick(city)} />
        </Link>
      ))}
    </div>
  );
};

export default CityGrid;
