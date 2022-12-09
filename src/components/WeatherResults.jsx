import { useEffect } from "react";
import { useSearchContext } from "../utils/SearchContext";

export const WeatherResults = () => {
  const { results, setResults, location, fetchWeatherData } =
    useSearchContext();

  useEffect(() => {
    getWeather();
    console.log(results);
  }, [results]);

  const getWeather = () => {
    if (results) {
      fetchWeatherData().then((data) => setResults(data));
    }
  };

  return (
    <>
      <h3>Results</h3>
      {/* {results.map((result, key) => {
        return <li key={key}>{result}</li>;
      })} */}
      {/* {results} */}
    </>
  );
};
