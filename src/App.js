import { NavBar } from "./components/NavBar";
import { MenuContext } from "./utils/MenuContext";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  // const [currentPage, setCurrentPage] = useState("home");
  return (
    <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
      <NavBar />
      <Routes>
        <Route path="/about" element={<Main pageHeader="About" />} />
        <Route path="/contact" element={<Main pageHeader="Contact" />} />
      </Routes>
    </MenuContext.Provider>
  );
}

export default App;
