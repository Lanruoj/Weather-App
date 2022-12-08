import { WeatherForm } from "../components/WeatherForm";
import { WeatherResults } from "../components/WeatherResults";
import { useState } from "react";
import { SearchContext } from "../utils/SearchContext";
import { fetchData } from "../utils/fetchData";
import { useEffect } from "react";

export const Weather = () => {
  const [textValue, setTextValue] = useState("");
  const [results, setResults] = useState(["one", "two", "three"]);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      );
      console.log(location);
    } else {
      console.log("Not Available");
    }
  }, []);

  const getWeather = () => {
    const weather = fetchData(
      `api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=835b67cd49ef047cb536ae1d6ce24537`
    );
    console.log(weather);
  };

  return (
    <>
      <SearchContext.Provider
        value={{ textValue, setTextValue, results, setResults }}
      >
        <WeatherForm />
        <WeatherResults />
      </SearchContext.Provider>
    </>
  );
};
