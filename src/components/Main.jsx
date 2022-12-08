import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { WeatherForm } from "./WeatherForm";
import { useMenuContext } from "../utils/MenuContext";
import { usePageContext } from "../utils/PageContext";

export const MainContainer = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 100vw;
  margin-top: 4rem;
  left: ${(props) => (props.position ? "50vw" : "0px")};
  transition: 0.3s;
`;

export const Main = () => {
  const { menuVisible } = useMenuContext();
  const { currentPage } = usePageContext();
  return (
    <MainContainer position={menuVisible}>
      <h2>{currentPage}</h2>
      <Routes>
        <Route path="/weather" element={<WeatherForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MainContainer>
  );
};
