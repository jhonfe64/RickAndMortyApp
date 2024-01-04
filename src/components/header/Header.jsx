import React from "react";
import "./header.css";

function header() {
  return (
    <>
      <header className="header">
        <div className="flex flex_wrap items_center space_between ">
          <div className="w_full">
            <img
              className="img_fluid"
              src="/images/rick_and_morty.png"
              alt=""
            />
          </div>
          <h1>Rick and Morty</h1>
        </div>
      </header>
    </>
  );
}

export default header;
