import styled from "styled-components";
import { useMenuContext } from "../utils/MenuContext";
import { Menu } from "./Menu";

const NavContainer = styled.nav`
  margin: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4rem;
  background-color: #def7ff;
`;

const MenuButton = styled.button`
  margin-left: 0.5rem;
  width: 4rem;
  height: 4rem;
  border: none;
  font-size: 3rem;
  background-color: #def7ff;
  color: #1d1d91;
`;

const NavTitle = styled.h1`
  margin: 0 1rem 0 0;
  font-size: 2rem;
  font-family: "Roboto Mono", monospace;
  color: #1d1d91;
`;

export const NavBar = () => {
  const { menuVisible, setMenuVisible } = useMenuContext();

  const toggleMenu = () => {
    menuVisible ? setMenuVisible(false) : setMenuVisible(true);
  };

  return (
    <>
      <NavContainer>
        <MenuButton onClick={toggleMenu}>&#62;</MenuButton>
        <NavTitle>weathercycle</NavTitle>
      </NavContainer>
      <Menu menuVisible={menuVisible} />
    </>
  );
};
