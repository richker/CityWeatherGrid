/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import { RecoilRoot, useRecoilState } from 'recoil';
import FilterBar from './FilterBar';


// Mock the recoil state
jest.mock('recoil', () => ({
    ...jest.requireActual('recoil'),
    useRecoilState: jest.fn(),
  }));
  
  const mockSearchTerm = '';
  const mockSelectedContinent = 'All';
  const mockSortCriteria = 'name';
  const mockSortDirection = 'asc';
  
  const mockSetSearchTerm = jest.fn();
  const mockSetSelectedContinent = jest.fn();
  const mockSetSortCriteria = jest.fn();
  const mockSetSortDirection = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
    (useRecoilState as jest.Mock)
      .mockReturnValueOnce([mockSearchTerm, mockSetSearchTerm])
      .mockReturnValueOnce([mockSelectedContinent, mockSetSelectedContinent])
      .mockReturnValueOnce([mockSortCriteria, mockSetSortCriteria])
      .mockReturnValueOnce([mockSortDirection, mockSetSortDirection]);
  });
  
  test('renders FilterBar component', () => {
    render(<RecoilRoot><FilterBar /></RecoilRoot>);
  });
  

  test('updates search term on input change', () => {
    const setSearchTerm = jest.fn();
    (useRecoilState as jest.Mock).mockReturnValueOnce([mockSearchTerm, setSearchTerm]);
  
    const { getByPlaceholderText } = render(<RecoilRoot><FilterBar /></RecoilRoot>);
    const input = getByPlaceholderText('Search by city or country...');
fireEvent.change(input, { target: { value: 'Asia' } });
expect(mockSetSearchTerm).toHaveBeenCalledWith('Asia');
  });

  test('updates selected continent on select change', () => {
    const setSelectedContinent = jest.fn();
    (useRecoilState as jest.Mock).mockReturnValueOnce([mockSearchTerm, jest.fn()])
                                 .mockReturnValueOnce([mockSelectedContinent, setSelectedContinent]);
  
    const { getByText } = render(<RecoilRoot><FilterBar /></RecoilRoot>);
    const select = getByText('All Continents').closest('select');
fireEvent.change(select!, { target: { value: 'Asia' } });
expect(mockSetSelectedContinent).toHaveBeenCalledWith('Asia');

  });

  test('updates sort criteria and direction on button click', () => {
    const setSortCriteria = jest.fn();
    const setSortDirection = jest.fn();
    (useRecoilState as jest.Mock).mockReturnValueOnce([mockSearchTerm, jest.fn()])
                                 .mockReturnValueOnce([mockSelectedContinent, jest.fn()])
                                 .mockReturnValueOnce([mockSortCriteria, setSortCriteria])
                                 .mockReturnValueOnce([mockSortDirection, setSortDirection]);
  
    const { getByText } = render(<RecoilRoot><FilterBar /></RecoilRoot>);
    const button = getByText('Distance');
fireEvent.click(button);
expect(mockSetSortCriteria).toHaveBeenCalledWith('distance');
expect(mockSetSortDirection).toHaveBeenCalledWith('asc');

  });
  
  test('toggles sort direction on same criteria button click', () => {
    const setSortDirection = jest.fn();
    (useRecoilState as jest.Mock).mockReturnValueOnce([mockSearchTerm, jest.fn()])
                                 .mockReturnValueOnce([mockSelectedContinent, jest.fn()])
                                 .mockReturnValueOnce([mockSortCriteria, jest.fn()])
                                 .mockReturnValueOnce([mockSortDirection, setSortDirection]);
  
    const { getByText } = render(<RecoilRoot><FilterBar /></RecoilRoot>);
    const button = getByText('Name');
    fireEvent.click(button);
    expect(mockSetSortDirection).toHaveBeenCalledWith('desc');
    
  });
  