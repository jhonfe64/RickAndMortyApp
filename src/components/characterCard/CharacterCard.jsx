import React from "react";
import "./characterCard.css";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`} className="caracter_card">
      <div className="img_container">
        <img className="img_fluid" src={character.image} alt="" />
      </div>
      <h5 className="text_center">{character.name}</h5>
    </Link>
  );
}

export default CharacterCard;
