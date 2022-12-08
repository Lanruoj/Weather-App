import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  width: 50vw;
  height: 50vh;
  margin-top: 4rem;
  left: ${(props) => (props.menuVisible ? "0px" : "-50vw")};
  transition: 0.3s;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Roboto Mono", monospace;
  font-size: 2rem;
`;

export const Menu = (props) => {
  return (
    <MenuContainer menuVisible={props.menuVisible}>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/weather">weather</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </MenuContainer>
  );
};
