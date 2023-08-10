import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [pokemon, setPokemon] = useState(1)
  const [pokemonName, setPokemonName] = useState('')
  
  const sumarPokemon = () => {
    setPokemon(pokemon + 1)
    //console.log(`valor antes del renderizado: ${pokemon}`)
  }

  useEffect(() => {
    console.log(`valor al actualizar el estado: ${pokemon}`)
    searchPokemon(pokemon)
    //fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    //  .then(response => response.json())
    //  .then(data => setPokemonName(data.name))
        
  },[pokemon])

  const searchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json()
    setPokemonName(data.name)
  }

  return (
    <>
      <h1>el nuemero es: {pokemonName}</h1>
      <button onClick={sumarPokemon}>Next</button>
      
    </>
  )
}

export default App
