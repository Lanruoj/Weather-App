import { WeatherForm } from "../components/WeatherForm";
import { WeatherResults } from "../components/WeatherResults";
import { useState } from "react";
import { SearchContext } from "../utils/SearchContext";

export const Weather = () => {
  const [textValue, setTextValue] = useState("");
  const [results, setResults] = useState([]);
  return (
    <>
      <SearchContext.Provider
        value={{ textValue, setTextValue, results, setResults }}
      >
        <WeatherForm />
        {results && <WeatherResults results={results} />}
      </SearchContext.Provider>
    </>
  );
};
