import { useContext, createContext } from "react";

export const MenuContext = createContext();
export const useMenuContext = () => useContext(MenuContext);
