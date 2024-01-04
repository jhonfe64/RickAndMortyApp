import React, { useState, useEffect, useContext } from "react";
import "./searchBar.css";
import Paginator from "../paginator/paginator";
import { SearchContext } from "../../context/SearchContext";
import Filters from "../filters/Filters";

function SearchBar() {
  const [trigger, setTrigger] = useState(false);
  const { searching, setSearching } = useContext(SearchContext);

  useEffect(() => {
    setTrigger(true);
  }, []);

  const handleInput = (e) => {
    setSearching(e.target.value);
  };

  return (
    <div className="searching_bar">
      <search>
        <form action="">
          <input
            onChange={handleInput}
            placeholder="Busca tu personaje"
            type="text"
            value={searching}
          />
        </form>
        <div className="flex flex_wrap space_between  items_center filt">
          <Filters />
          <Paginator />
        </div>
      </search>
    </div>
  );
}

export default SearchBar;
