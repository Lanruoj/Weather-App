import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 50vw;
  height: 100vh;
  margin-top: 4rem;
  background-color: red;
`;

const NavLink = styled(Link)`
  color: blue;
  display: block;
`;

export const Menu = () => {
  return (
    <MenuContainer>
      <NavLink to="#">About</NavLink>
      <NavLink to="#">Weather</NavLink>
      <NavLink to="#">Contact</NavLink>
    </MenuContainer>
  );
};
