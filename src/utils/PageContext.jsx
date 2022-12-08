import { useContext, createContext } from "react";

export const PageContext = createContext();
export const usePageContext = () => useContext(PageContext);
