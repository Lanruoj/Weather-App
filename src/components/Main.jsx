import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { WeatherForm } from "./WeatherForm";
import { useMenuContext } from "../utils/MenuContext";

export const MainContainer = styled.main`
  position: absolute;
  margin-top: 4rem;
  left: ${(props) => (props.position ? "50vw" : "0px")};
  transition: 0.3s;
`;

export const Main = () => {
  const { menuVisible } = useMenuContext();
  return (
    <MainContainer position={menuVisible}>
      <h2>Title</h2>
      <Routes>
        <Route path="/weather" element={<WeatherForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MainContainer>
  );
};
