import { NavBar } from "./components/NavBar";
import { MenuContext } from "./utils/MenuContext";
import { useState } from "react";
import { Main } from "./components/Main";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState("Weather");
  return (
    <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
      <NavBar />
      <Main></Main>
    </MenuContext.Provider>
  );
}

export default App;
