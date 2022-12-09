import { useEffect, useState } from "react";
import { useSearchContext } from "../utils/SearchContext";

export const WeatherResults = () => {
  const { location, fetchWeatherData } = useSearchContext();
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (location.latitude) {
      getWeather().then((data) => setResults(data));
      // .then(console.log("results:", results));
    }
  }, [location]);

  const getWeather = () => {
    return fetchWeatherData();
    // .then(console.log("results:", results));
  };

  return (
    <>
      <h3>Results</h3>
      {/* {results.map((result, key) => {
        return <li key={key}>{result}</li>;
      })} */}
      {results && <p>{results.cod}</p>}
    </>
  );
};
