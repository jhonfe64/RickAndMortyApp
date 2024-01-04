import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import { FiltersContext } from "../../context/FiltersContext";
import { PagesContext } from "../../context/PagesContext";
import useFetch from "../../hooks/useFetch";
import Loader from "../loader/Loader";
import Results from "../results/Results";
import NoData from "../noData/NoData";
import "./filtered.css";

function Filtered() {
  const { searching } = useContext(SearchContext);
  const { page, setPage } = useContext(PagesContext);
  const { filters } = useContext(FiltersContext);

  const { data, loading, error } = useFetch(
    `https://rickandmortyapi.com/api/character/?name=${searching}&page=${page}&status=${filters.status}&gender=${filters.gender}&species=${filters.specie} `,
    true
  );

  useEffect(() => {
    if (page === data?.info?.pages) {
      setPage(1);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [searching]);

  useEffect(() => {
    if (error) {
      setPage(1);
    }

    setPage(1);
  }, [error]);

  return (
    <div className="filtered">
      {data?.results?.length > 0 ? (
        loading ? (
          <Loader />
        ) : (
          <Results characters={data?.results} />
        )
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default Filtered;
