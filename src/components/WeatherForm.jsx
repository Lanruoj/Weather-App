import styled from "styled-components";

const Form = styled.form`
  background-color: red;
  display: flex;
  justify-content: center;
`;

const SearchField = styled.input.attrs({ type: "search" })`
  /* background-color: blue; */
  height: 2rem;
  width: 10rem;
`;

export const WeatherForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchField />
    </Form>
  );
};
