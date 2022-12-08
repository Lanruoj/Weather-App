import styled from "styled-components";

export const Main = styled.main`
  position: absolute;
  margin-top: 4rem;
  left: ${(props) => (props.position ? "50vw" : "0px")};
  transition: 0.3s;
`;
