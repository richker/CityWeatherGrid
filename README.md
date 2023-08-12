Certainly! Here's a comprehensive README documentation for your application:

---

# City Explorer App

City Explorer is a React application that allows users to explore cities from around the world, view details about each city, and sort them based on various criteria.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **City Grid**: Displays a list of cities with their images, names, and countries.
- **Filtering**: Users can filter cities based on search terms or continents.
- **Sorting**: Cities can be sorted by name or distance from a reference point.
- **City Details**: Clicking on a city card navigates to a detailed view, showing more information about the city and its current weather.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/city-explorer.git
   cd city-explorer
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**: Set up your environment variables based on the `.env.example` file in the root directory.

   ```env
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

4. **Start the Application**

   ```bash
   npm start
   ```

   This will start the application on `http://localhost:3000`.

## Usage

1. **Home Page**: On the main page, you'll see a grid of cities. You can hover over each city to see a brief description.
2. **Filtering**: Use the filter bar at the top to search for cities by name or country, or to filter by continent.
3. **Sorting**: Sort cities by name or distance using the buttons in the filter bar.
4. **City Details**: Click on a city card to view detailed information about the city, including its current weather.

## Testing

To ensure the reliability of the application, comprehensive tests have been written using `@testing-library/react` and `jest`.

1. **Run Tests**

   ```bash
   npm test
   ```

2. **Test Coverage**: To check the test coverage, you can run:

   ```bash
   npm test -- --coverage
   ```

## Contributing

1. Fork the repository.
2. Create a new branch for your features or bug fixes.
3. Run tests to ensure your changes don't break existing functionality.
4. Create a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

This README provides a clear overview of the application, its features, and how to set it up. You can further customize it based on any additional features or details you'd like to add.