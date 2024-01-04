import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PagesContext } from "../../context/PagesContext";
import "./paginator.css";

function Paginator() {
  const { page, setPage } = useContext(PagesContext);

  const rightButtton = useRef(null);
  const leftButton = useRef(null);

  const handlePaginator = (action) => {
    if (action === "increase") {
      setPage(page + 1);
    } else if (action === "decrease") {
      page > 1 && setPage(page - 1);
    }
  };

  return (
    <div className="paginator text_white flex justify_end flex items_center">
      <button
        onClick={() => handlePaginator("decrease")}
        ref={leftButton}
        className="text_white"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {page}
      <button onClick={() => handlePaginator("increase")} ref={rightButtton}>
        <FontAwesomeIcon disabled className="text_white" icon={faAngleRight} />
      </button>
    </div>
  );
}

export default Paginator;
