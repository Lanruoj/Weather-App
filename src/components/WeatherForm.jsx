import { useEffect, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchField = styled.input.attrs({ type: "search" })`
  height: 2rem;
  width: 10rem;
`;

const SubmitButton = styled.button`
  color: blue;
  height: 2rem;
  width: 4rem;
`;

export const WeatherForm = () => {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTextValue("Location");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textValue);
  };

  const handleChange = (e) => {
    setTextValue(e.target.value);
    // console.log(textValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchField onChange={handleChange} value={textValue} />
      <SubmitButton>Go</SubmitButton>
    </Form>
  );
};
