import { WeatherForm } from "../components/WeatherForm";
import { WeatherResults } from "../components/WeatherResults";
import { useState } from "react";
import { SearchContext } from "../utils/SearchContext";

export const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [days, setDays] = useState(1);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: "",
  });
  const [results, setResults] = useState(null);

  const fetchWeatherData = () => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=835b67cd49ef047cb536ae1d6ce24537`
    ).then((response) => response.json());
  };

  const fetchLocation = () => {
    return fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&appid=835b67cd49ef047cb536ae1d6ce24537`
    ).then((response) => response.json());
  };

  return (
    <>
      <SearchContext.Provider
        value={{
          cityName,
          setCityName,
          countryCode,
          setCountryCode,
          location,
          setLocation,
          results,
          setResults,
          results,
          days,
          setDays,
          fetchWeatherData,
          fetchLocation,
        }}
      >
        <WeatherForm />
        <WeatherResults />
      </SearchContext.Provider>
    </>
  );
};
