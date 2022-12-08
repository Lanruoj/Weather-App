import styled from "styled-components";

const Form = styled.form`
  background-color: red;
`;

const SearchField = styled.input.attrs({ type: "search" })`
  background-color: blue;
`;

export const WeatherForm = () => {
  return (
    <Form>
      <SearchField />
    </Form>
  );
};
