import { WeatherForm } from "../components/WeatherForm";

export const Weather = (props) => {
  return (
    <>
      <WeatherForm />
      {props.results && <p>Results</p>}
    </>
  );
};
