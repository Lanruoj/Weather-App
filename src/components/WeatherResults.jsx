import { useSearchContext } from "../utils/SearchContext";

export const WeatherResults = () => {
  const { results } = useSearchContext();
  return (
    <>
      <h3>Results</h3>
      {results.map((result, key) => {
        return <li key={key}>{result}</li>;
      })}
    </>
  );
};
