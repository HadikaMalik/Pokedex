import React from "react";
import { useParams } from "react-router-dom";

function PokemonInfo() {
    let {name} = useParams();
    return (
        <>
        <p>Pokemon name: {name}</p>
        </>
    )
}

export default PokemonInfo;