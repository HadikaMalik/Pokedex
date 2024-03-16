import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import PokemonMovesSelector from './PokemonMoveSelector';
import PokemonCity from './PokemonCity';
import PokemonInfo from './PokemonInfo';

function logWhenClicked() {
  console.log("logs-clicks")
}


function App() {
  const abilities = ['Thundershock', 'Agility', 'Quick Attack'];
  const date = new Date().toLocaleDateString();
  const namesOfPokemon = ['Charizard', 'Pikachu', 'Charmander', 'Squirtle', 'Blastoise'];

  return <>
    <BrowserRouter>
      <header>
        <Logo appName="Hadika Malik's Pokedex" logWhenClicked={logWhenClicked} />
        <li><Link to="/best-pokemon">Best Pokemon</Link></li>
        <li><Link to="/caught-pokemon">Caught Pokemon</Link></li>
        <li><Link to="/pokemon-moves-selector">Pokemon Moves selector</Link></li>
        <li><Link to="/pokemon-city">Pokemon City</Link></li>
        <li><Link to="/pokemon/Pikachu">Pikachu</Link></li>
        <li><Link to="/pokemon/Bulbasaur">Bulbasaur</Link></li>
        <li><Link to="/pokemon/Charmander">Charmander</Link></li>
        <Routes>
          <Route element={<BestPokemon abilities={abilities} />} path="/best-pokemon" />
          <Route element={<CaughtPokemon date={date} namesOfPokemon={namesOfPokemon} />} path="/caught-pokemon" />
          <Route path="/pokemon/:name" element={<PokemonInfo />} />
          <Route element={<PokemonMovesSelector />} path="/pokemon-moves-selector" />
          <Route element={<PokemonCity />} path="/pokemon-city" />
        </Routes>
      </header>
    </BrowserRouter>
  </>
}

export default App
