import { NavBar } from "./components/NavBar";
import { MenuContext } from "./utils/MenuContext";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { About } from "./pages/About";
import { Weather } from "./pages/Weather";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
      <NavBar />
      <Main position={menuVisible}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/weather" element={<Weather pageHeader="Contact" />} />
        </Routes>
      </Main>
    </MenuContext.Provider>
  );
}

export default App;
