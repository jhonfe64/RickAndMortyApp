import { createContext } from "react";
import { useState } from "react";

const PagesContext = createContext();

const PagesProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  return (
    <PagesContext.Provider value={{ page, setPage }}>
      {children}
    </PagesContext.Provider>
  );
};

export { PagesProvider, PagesContext };
