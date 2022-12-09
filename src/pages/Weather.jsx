import { WeatherForm } from "../components/WeatherForm";
import { WeatherResults } from "../components/WeatherResults";
import { useState } from "react";
import { SearchContext } from "../utils/SearchContext";
import { fetchData } from "../utils/fetchData";
import { useEffect } from "react";

export const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [days, setDays] = useState(1);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: "",
  });
  // const [results, setResults] = useState(null);

  // useEffect(() => {
  //   fetchLocation()
  // }, [])

  const fetchWeatherData = () => {
    // console.log(location.latitude, location.longitude);
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=835b67cd49ef047cb536ae1d6ce24537`
    ).then((response) => response.json());
    // .then((data) => console.log(data));
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
          // results,
          // setResults,
          days,
          setDays,
          fetchWeatherData,
        }}
      >
        <WeatherForm />
        <WeatherResults />
      </SearchContext.Provider>
    </>
  );
};
