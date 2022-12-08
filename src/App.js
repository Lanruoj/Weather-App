import { NavBar } from "./components/NavBar";
import { MenuContext } from "./utils/MenuContext";
import { useState } from "react";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  // const [currentPage, setCurrentPage] = useState("home");
  return (
    <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
      <NavBar />
    </MenuContext.Provider>
  );
}

export default App;
