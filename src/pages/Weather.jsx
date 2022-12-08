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
  const [results, setResults] = useState(["one", "two", "three"]);
  // const [location, setLocation] = useState({ latitude: null, longitude: null });

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) =>
  //       setLocation({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       })
  //     );
  //   } else {
  //     console.log("Not Available");
  //   }
  // }, []);

  // const getWeather = () => {
  //   return fetchData(
  //     `http://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=835b67cd49ef047cb536ae1d6ce24537`
  //   );
  // };

  return (
    <>
      <SearchContext.Provider
        value={{ cityName, setCityName, results, setResults, days, setDays }}
      >
        <WeatherForm />
        <WeatherResults />
      </SearchContext.Provider>
    </>
  );
};
