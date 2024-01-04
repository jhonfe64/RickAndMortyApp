import React, { useContext, useEffect } from "react";
import { FiltersContext } from "../../context/FiltersContext";
import { PagesContext } from "../../context/PagesContext";
import "./filters.css";

const Filters = () => {
  const { filters, setFilters } = useContext(FiltersContext);
  const { setPage } = useContext(PagesContext);

  const resetFilters = () => {
    setFilters({
      status: "",
      gender: "",
      specie: "",
    });
  };

  useEffect(() => {
    setPage(1);
    console.log(filters);
  }, [filters]);

  const handleSelect = (e) => {
    if (e.target.id === "status") {
      setFilters({
        ...filters,
        status: e.target.value,
      });
    }
    if (e.target.id === "gender") {
      setFilters({
        ...filters,
        gender: e.target.value,
      });
    }
    if (e.target.id === "specie") {
      setFilters({
        ...filters,
        specie: e.target.value,
      });
    }
  };

  //cuando lso filters estenb reseteados y no haya nada de texto que el valor sea 1 del counter

  return (
    <div>
      <select
        value={filters.status}
        onChange={handleSelect}
        className="text_white"
        id="status"
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        value={filters.gender}
        onChange={handleSelect}
        name=""
        id="gender"
        className="text_white"
      >
        <option value="">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        value={filters.specie}
        onChange={handleSelect}
        name=""
        id="specie"
        className="text_white"
      >
        <option value="">Specie</option>
        <option value="Disease">Disease</option>
        <option value="Human">Human</option>
        <option value="Animal">Animal</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Alien">Alien</option>
        <option value="ronenberg">Cronenberg</option>
        <option value="Robot">Robot</option>
      </select>
      {Object.values(filters).some((valor) => valor !== " ") && (
        <button className="filter_reset text_white" onClick={resetFilters}>
          Reset filters
        </button>
      )}
    </div>
  );
};

export default Filters;
