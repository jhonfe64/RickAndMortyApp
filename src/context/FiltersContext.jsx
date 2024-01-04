import { createContext } from "react";
import { useState } from "react";

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    status: "",
    gender: "",
    specie: "",
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersProvider, FiltersContext };
