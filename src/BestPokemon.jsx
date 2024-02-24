import React from "react";

function BestPokemon({abilities}) {
    return <>
      <p>My favourite pokemon is Pikachu</p>
      <ul>{abilities.map(ability => (
        <li key={ability}>{ability}</li>))}</ul>
    </>
  }

  export default BestPokemon