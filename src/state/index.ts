import { atom, selector } from 'recoil';
import citiesData from '../data.json';
import { City } from '../types';

export const allCitiesState = atom({
  key: 'allCitiesState',
  default: citiesData.cities,
});

export const searchFilterState = atom({
  key: 'searchFilterState',
  default: '',
});

export const continentFilterState = atom({
  key: 'continentFilterState',
  default: 'All',
});

export const sortCriteriaState = atom({
  key: 'sortCriteriaState',
  default: 'name', // 'name' or 'distance'
});

export const sortDirectionState = atom({
  key: 'sortDirectionState',
  default: 'asc', // 'asc' or 'desc'
});

// Haversine formula to calculate the distance between two points on the Earth
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

export const filteredCitiesSelector = selector({
  key: 'filteredCitiesSelector',
  get: ({ get }) => {
    const allCities = get(allCitiesState);
    const searchTerm = get(searchFilterState).toLowerCase();
    const selectedContinent = get(continentFilterState);
    const sortCriteria = get(sortCriteriaState);
    const sortDirection = get(sortDirectionState);

    let filteredCities = allCities.filter(city => 
      (city.name.toLowerCase().includes(searchTerm) || city.country.toLowerCase().includes(searchTerm)) &&
      (selectedContinent === 'All' || city.continent === selectedContinent) && (city.active === true)
    );

    if (sortCriteria === 'name') {
      filteredCities.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return sortDirection === 'asc' ? -1 : 1;
        if (nameA > nameB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    } else if (sortCriteria === 'distance') {
      const telAvivCoords = { lat: 32.0853, lng: 34.7818 }; // Tel Aviv, Israel coordinates
      filteredCities.sort((a, b) => {
        const distanceA = calculateDistance(a.coords.lat, a.coords.lng, telAvivCoords.lat, telAvivCoords.lng);
        const distanceB = calculateDistance(b.coords.lat, b.coords.lng, telAvivCoords.lat, telAvivCoords.lng);
        return sortDirection === 'asc' ? distanceA - distanceB : distanceB - distanceA;
      });
    }

    return filteredCities;
  },
});


export const selectedCityState = atom<City | null>({
  key: 'selectedCityState',
  default: null,
});

export const temperatureUnitState = atom<'metric' | 'imperial'>({
  key: 'temperatureUnitState',
  default: 'metric',
});

