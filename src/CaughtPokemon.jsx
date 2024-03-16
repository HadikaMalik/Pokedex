import React from "react";
import { useState } from "react";

function CaughtPokemon({ date }) {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("")

  function catchPokemon() {
    setCaught([...caught, pokemonNameInput]);
  }

  function handleInputChange(event){
    setPokemonNameInput(event.target.value);
  }

  return <>
    <p>Caught {caught.length} Pokemon on {date}</p>
    <ul>{caught.map((caught, id) => (
      <li key={id}>{caught}</li>))}</ul>
    <input type="text" value={pokemonNameInput} onChange={handleInputChange}/>
    <button onClick={catchPokemon}>Caught Pokemon</button>
  </>
}

export default CaughtPokemon