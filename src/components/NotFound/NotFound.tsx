import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1>Page Not Found :)</h1>
      <Link to="/" className="home-button">Return to Home</Link>
    </div>
  );
}

export default NotFound;
