import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [usersWithWeather, setUsersWithWeather] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://randomuser.me/api/?results=9";
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchWeatherDetails = async () => {
      try {
        const weatherPromises = users.map(async (user) => {
          const { latitude, longitude } = user.location.coordinates;
          const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&current=weather_code`;
          const fetchWeather = await fetch(weatherUrl);
          const weatherData = await fetchWeather.json();

          return { user, weatherData };
        });

        const usersWeatherData = await Promise.all(weatherPromises);

        setUsersWithWeather(usersWeatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (users.length > 0) {
      fetchWeatherDetails();
    }
  }, [users]);

  const contextValue = {
    users,
    usersWithWeather,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(DataContext);
  if (!context || !context.users) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
