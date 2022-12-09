import { useEffect, useState } from "react";
import { useSearchContext } from "../utils/SearchContext";

export const WeatherResults = () => {
  const { results } = useSearchContext();

  const getDayNumber = (datetime) => {
    const date = new Date(datetime).getDay();
    return date;
  };

  useEffect(() => {
    if (results) {
      console.log(results);
      // const datetime = results[0]["dt_txt"];
      // const date = getDayNumber(results[0]["dt_txt"]);
      // console.log(date);
    }
  }, [results]);

  return (
    <>
      <h3>Results</h3>
      {results &&
        results.map((timeBlock, index) => {
          return <li key={index}>{timeBlock.main.temp}</li>;
        })}
    </>
  );
};
