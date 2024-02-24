import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';

function App() {
  const abilities = ['Thundershock', 'Agility', 'Quick Attack'];
  const date = new Date().toLocaleDateString();
  return <>
    <header>
      <Logo appName="Hadika Malik's Pokedex"/>
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon date={date}/>
    </header>
  </>
}

export default App
