import { NavBar } from "./components/NavBar";
import { MenuContext } from "./utils/MenuContext";
import { PageContext } from "./utils/PageContext";
import { useState } from "react";
import { Main } from "./components/Main";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState("Weather");
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
        <NavBar />
        <Main></Main>
      </MenuContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
