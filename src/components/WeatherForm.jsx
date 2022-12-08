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
`;

const SubmitButton = styled.button`
  height: 2rem;
  width: 4rem;
  margin: 1rem;
`;

const Dropdown = styled.select`
  color: blue;
`;

export const WeatherForm = (props) => {
  const { textValue, setTextValue } = useSearchContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextValue("");
    props.getWeather();
  };

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchField
        onChange={handleChange}
        value={textValue}
        placeholder="Location"
      />
      <SubmitButton>Go</SubmitButton>
    </Form>
  );
};
