import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import { FiltersContext } from "../../context/FiltersContext";
import { PagesContext } from "../../context/PagesContext";
import useFetch from "../../hooks/useFetch";
import Loader from "../loader/Loader";
import Results from "../results/Results";
import NoData from "../noData/noData";
import "./filtered.css";

function Filtered() {
  const [characters, setCharacters] = useState([]);

  const { searching } = useContext(SearchContext);
  const { page, setPage } = useContext(PagesContext);
  const { filters } = useContext(FiltersContext);

  const { data, loading, error } = useFetch(
    `https://rickandmortyapi.com/api/character/?name=${searching}&page=${page}&status=${filters.status}&gender=${filters.gender}&species=${filters.specie} `,
    true
  );

  useEffect(() => {
    data?.results?.length > 0 && setCharacters(data.results);
    if (page === data?.info?.pages) {
      setPage(1);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [searching]);

  useEffect(() => {
    if (error) {
      setCharacters([]);
      setPage(1);
    }
  }, [error]);

  return (
    <div className="filtered">
      {characters.length > 0 ? (
        loading ? (
          <Loader />
        ) : (
          <Results characters={characters} />
        )
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default Filtered;
