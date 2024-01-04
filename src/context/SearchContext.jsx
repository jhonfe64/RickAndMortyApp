import { createContext } from "react";
import { useState } from "react";

const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [searching, setSearching] = useState("");
  return (
    <SearchContext.Provider value={{ searching, setSearching }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
