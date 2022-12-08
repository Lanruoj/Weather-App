import styled from "styled-components";
import { Link } from "react-router-dom";
import { usePageContext } from "../utils/PageContext";

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
  const { setCurrentPage } = usePageContext();
  const handleClick = (e) => {
    setCurrentPage(e.target.name);
  };

  return (
    <MenuContainer menuVisible={props.menuVisible}>
      <NavLink to="/about" onClick={handleClick} name="About">
        about
      </NavLink>
      <NavLink to="/weather" onClick={handleClick} name="Weather">
        weather
      </NavLink>
      <NavLink to="/contact" onClick={handleClick} name="Contact">
        contact
      </NavLink>
    </MenuContainer>
  );
};
