import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchContext } from "../utils/SearchContext";
import { countryCodes } from "../utils/countryCodes";
import { fetchData } from "../utils/fetchData";

const Form = styled.form`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CityNameSearch = styled.input.attrs({ type: "search" })`
  height: 2.5rem;
  width: 12rem;
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
  width: 5rem;
  height: 2.5rem;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
`;

const DaysLabel = styled.label.attrs({ htmlFor: "days" })`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
`;

export const WeatherForm = (props) => {
  const {
    cityName,
    setCityName,
    countryCode,
    setCountryCode,
    days,
    setDays,
    location,
    setLocation,
  } = useSearchContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cityName);
    console.log(countryCode);
    fetchLocation(cityName, countryCode).then((data) => {
      console.log(data[0]);
      console.log(data[0].lat);
    });
    setCityName("");
    setCountryCode("");
    // props.getWeather();
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

  const fetchLocation = (city, country) => {
    return fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=835b67cd49ef047cb536ae1d6ce24537`
    ).then((response) => response.json());
    // .then((json) => console.log(json));
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
