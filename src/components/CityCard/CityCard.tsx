import React from 'react';
import { City } from '../../types';
import './CityCard.css';

type CityCardProps = {
  city: City;
  onClick: () => void;
};

const CityCard: React.FC<CityCardProps> = ({ city, onClick }) => {
  return (
    <div className="city-card" onClick={onClick}>
      <img src={city.image} alt={city.name} />
      <div className="city-info">
        <h3>{city.name}</h3>
        <h4>{city.country}</h4>
      </div>
      <div className="city-description">
        <p>{city.description}</p>
      </div>
    </div>
  );
};

export default CityCard;
