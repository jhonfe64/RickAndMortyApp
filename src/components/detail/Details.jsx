import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import Alive from "../alive/Alive";
import Dead from "../dead/Dead";
import "./details.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Details() {
  const { id } = useParams();

  const [trigger, setTrigger] = useState(false);
  const [character, setCharacter] = useState([]);

  const { data } = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    trigger
  );

  useEffect(() => {
    setTrigger(true);
  }, []);

  useEffect(() => {
    data != null && setCharacter(data);
  }, [data]);

  return (
    <div className="details flex items_center relative">
      <div className="img_container">
        <img src={character.image} alt="" />
      </div>
      <div className="flex space_between w_full info">
        <ul>
          <li className="flex items_center name">
            <p className="text_white bold">{character.name}</p>
          </li>
          <li className="flex items_center item">
            <p className="text_white">
              {character?.status?.toLowerCase() === "alive" ? (
                <Alive />
              ) : (
                <Dead />
              )}
            </p>
          </li>
          <li className="flex items_center item">
            <p className="text_white">
              <span className="bold">Species: </span> {character.species}
            </p>
          </li>
          <li className="flex items_center item">
            <p className="text_white">
              <span className="bold">gender:</span> {character.gender}
            </p>
          </li>
          <li className="flex items_center item">
            <p className="text_white">
              <span className="bold">Origin:</span> {character?.location?.name}
            </p>
          </li>
          <li className="flex items_center item">
            <p className="text_white">
              <span className="bold">Episodes:</span>{" "}
              {character?.episode?.length}
            </p>
          </li>
          <li>
            <Link to="/" className="text_white go_back_btn">
              <FontAwesomeIcon className="go_back_icon" icon={faArrowLeft} />
              Go back
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Details;
