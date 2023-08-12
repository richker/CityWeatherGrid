import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityGrid from './components/CityGrid/CityGrid';
import FilterBar from './components/FilterBar/FilterBar';
import CityDetails from './components/CityDetails/CityDetails';
import NotFound from './components/NotFound/NotFound';

const MainLayout: React.FC = () => {
  return (
    <div className="App">
      <FilterBar />
      <CityGrid />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/city-details" element={<CityDetails />} />
        <Route path="/" element={<MainLayout/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
