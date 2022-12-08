import styled from "styled-components";
import { useMenuContext } from "../utils/MenuContext";

export const Main = styled.main`
  position: absolute;
  margin-top: 4rem;
  left: ${(props) => (props.position ? "50vw" : "0px")};
  transition: 0.3s;
`;

// export const Main = (props) => {
//   const { menuVisible } = useMenuContext();
//   return (
//     <MainDiv menuVisible={menuVisible ? true : false}>
//       <h2>{props.pageHeader}</h2>
//       {props.content}
//     </MainDiv>
//   );
// };
