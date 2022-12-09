import { useEffect, useState } from "react";
import { useSearchContext } from "../utils/SearchContext";

export const WeatherResults = () => {
  const { results } = useSearchContext();
  // const resultDays =

  const getDayNumber = (datetime) => {
    const date = new Date(datetime).getDay();
    return date;
  };

  const groupResultsByDay = (results) => {
    // let resultsObj = {};
    // resultsObj["monday"] = results.filter(
    //   (result) => getDayNumber(result["dt_txt"]) === index
    // );
    // let sortedResults = results.reduce((prev, current) {
    //   prev[current.dt] = prev[current.dt] || [];
    //   prev[current.dt].push(current);
    //   return prev
    // })
    // let sortedResults = results.groupBy((result) =>
    //   getDayNumber(result["dt_text"])
    // );
    const sortedByMs = results.reduce((prev, current) => {
      if (!prev[getDayNumber(current["dt_txt"])]) {
        prev[getDayNumber(current["dt_txt"])] = [];
      }
      prev[getDayNumber(current["dt_txt"])].push(current);
      return prev;
    }, {});
    // console.log(sortedByMs);
    return sortedByMs;
  };

  useEffect(() => {
    if (results) {
      // console.log(results);
      const resultsGroupedByDays = groupResultsByDay(results);
      console.log(resultsGroupedByDays);
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
