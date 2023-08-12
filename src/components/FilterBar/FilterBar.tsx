import React, {ReactElement} from 'react';
import { useRecoilState } from 'recoil';
import { searchFilterState, continentFilterState, sortCriteriaState, sortDirectionState } from '../../state';
import "./FilterBar.css"

const FilterBar: React.FC = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchFilterState);
  const [selectedContinent, setSelectedContinent] = useRecoilState(continentFilterState);
  const [sortCriteria, setSortCriteria] = useRecoilState(sortCriteriaState);
  const [sortDirection, setSortDirection] = useRecoilState(sortDirectionState);

  const handleSort = (criteria: string) => {
    if (sortCriteria === criteria) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCriteria(criteria);
      setSortDirection('asc');
    }
  };

  return (
    <div className="filter-bar">
      <input 
        type="text" 
        placeholder="Search by city or country..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select 
        value={selectedContinent}
        onChange={(e) => setSelectedContinent(e.target.value)}
      >
        <option value="All">All Continents</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Africa">Africa</option>
        <option value="Australia">Australia</option>
      </select>
      <div>
        <span>Sort by:</span>
        <button 
          className={sortCriteria === 'name' ? 'active' : ''} 
          onClick={() => handleSort('name')}
        >
          Name
        </button>
        <button 
          className={sortCriteria === 'distance' ? 'active' : ''} 
          onClick={() => handleSort('distance')}
        >
          Distance
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
