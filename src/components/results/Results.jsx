import React from "react";
import CharacterCard from "../characterCard/CharacterCard";

function Results({ characters }) {
  return (
    <div>
      <div className="flex flex_wrap space_between">
        {characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
}

export default Results;
