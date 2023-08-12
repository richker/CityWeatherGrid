// components/Card/Card.tsx
import React from 'react';
import './Card.css';

type CardProps = {
  imageSrc: string;
  imageAlt: string;
  header: string;
  subHeader: string;
  description: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt, header, subHeader, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageSrc} alt={imageAlt} />
      <div className="card-content">
        <h3>{header}</h3>
        <h4>{subHeader}</h4>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
