import { WeatherForm } from "../components/WeatherForm";
import { WeatherResults } from "../components/WeatherResults";
import { useState } from "react";

export const Weather = () => {
  const [results, setResults] = useState([]);
  return (
    <>
      <WeatherForm />
      {results && <WeatherResults results={results} />}
    </>
  );
};
