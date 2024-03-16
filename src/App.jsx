import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import PokemonMovesSelector from './PokemonMoveSelector';
import PokemonCity from './PokemonCity';
function logWhenClicked(){
  console.log("logs-clicks")
}


function App() {
  const abilities = ['Thundershock', 'Agility', 'Quick Attack'];
  const date = new Date().toLocaleDateString();
  const namesOfPokemon = ['Charizard', 'Pikachu', 'Charmander', 'Squirtle', 'Blastoise'];

  return <>
    <header>
      <Logo  appName="Hadika Malik's Pokedex" logWhenClicked={logWhenClicked}/>
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon date={date} namesOfPokemon={namesOfPokemon}/>
      <PokemonMovesSelector/>
      <PokemonCity/>
    </header>
  </>
}

export default App
