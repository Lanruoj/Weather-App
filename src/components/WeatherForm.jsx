import { useState } from "react";
import styled from "styled-components";
import { useSearchContext } from "../utils/SearchContext";

const Form = styled.form`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchField = styled.input.attrs({ type: "search" })`
  height: 2rem;
  width: 10rem;
  font-size: 1.5rem;
  text-align: "center";
  margin: 1rem;
  font-family: "Roboto Mono", monospace;
`;

const SubmitButton = styled.button`
  height: 2rem;
  width: 4rem;
  margin: 1rem;
`;

const DaysDropdown = styled.select.attrs({ name: "days", id: "days" })`
  width: 3rem;
  height: 2rem;
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
`;

const DaysLabel = styled.label.attrs({ htmlFor: "days" })`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
`;

export const WeatherForm = (props) => {
  const { textValue, setTextValue, days, setDays } = useSearchContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextValue("");
    props.getWeather();
  };

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchField
        onChange={handleChange}
        value={textValue}
        placeholder="Location"
      />
      <div>
        <DaysLabel htmlFor="days">Days </DaysLabel>
        <DaysDropdown onChange={handleDaysChange} value={days}>
          {[...Array(4).keys()].map((day) => {
            day++;
            return <option key={day}>{day}</option>;
          })}
        </DaysDropdown>
      </div>
      <SubmitButton>Go</SubmitButton>
    </Form>
  );
};
