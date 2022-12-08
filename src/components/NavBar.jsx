import styled from "styled-components";

const NavContainer = styled.nav`
  width: 100vw;
  height: 4rem;
  background-color: #def7ff;
`;

const MenuButton = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  font-size: 3rem;
  background-color: #def7ff;
  color: #4b4b4b;
`;

export const NavBar = () => {
  return (
    <NavContainer>
      <MenuButton>&#62;</MenuButton>
    </NavContainer>
  );
};
