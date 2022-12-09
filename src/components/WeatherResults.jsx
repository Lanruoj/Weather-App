import { useEffect, useState } from "react";
import { useSearchContext } from "../utils/SearchContext";

export const WeatherResults = () => {
  const { results } = useSearchContext();

  useEffect(() => {
    if (results) console.log(results);
  }, [results]);

  return (
    <>
      <h3>Results</h3>
    </>
  );
};
