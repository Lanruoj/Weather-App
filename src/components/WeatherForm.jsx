import { useState } from "react";
import styled from "styled-components";
import { useSearchContext } from "../utils/SearchContext";
import { countryCodes } from "../utils/countryCodes";

const Form = styled.form`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CityNameSearch = styled.input.attrs({ type: "search" })`
  height: 2.5rem;
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

const Dropdown = styled.select`
  width: 4rem;
  height: 2.5rem;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
`;

const DaysLabel = styled.label.attrs({ htmlFor: "days" })`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
`;

export const WeatherForm = (props) => {
  const { cityName, setCityName, countryCode, setCountryCode, days, setDays } =
    useSearchContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName("");
    props.getWeather();
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <CityNameSearch
          onChange={handleChange}
          value={cityName}
          placeholder="City"
        />
        <Dropdown
          onChange={handleCountryCodeChange}
          value={countryCode}
          placeholder="Country code"
          name="country-code"
          id="country-code"
        >
          {countryCodes.map((code) => {
            return <option key={code}>{code}</option>;
          })}
        </Dropdown>
      </div>
      <div>
        <DaysLabel htmlFor="days">Days </DaysLabel>
        <Dropdown
          onChange={handleDaysChange}
          value={days}
          name="days"
          id="days"
        >
          {[...Array(4).keys()].map((day) => {
            day++;
            return <option key={day}>{day}</option>;
          })}
        </Dropdown>
      </div>
      <SubmitButton>Go</SubmitButton>
    </Form>
  );
};
