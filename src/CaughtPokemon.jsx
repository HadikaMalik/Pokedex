import React from "react";
import { useState } from "react";

function CaughtPokemon({ date, namesOfPokemon }) {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught([...caught, randomPokemon()]);
  }

  function randomPokemon(){
   return namesOfPokemon[(Math.floor(Math.random() * namesOfPokemon.length))]
  }

  return <>
    <p>Caught {caught.length} Pokemon on {date}</p>
    <ul>{caught.map((caught, id) => (
        <li key={id}>{caught}</li>))}</ul>
    <button onClick={catchPokemon}>Caught Pokemon</button>
  </>
}

export default CaughtPokemon