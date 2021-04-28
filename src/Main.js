import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Main = (props) => {

 const url = `https://pokeapi.co/api/v2/pokemon/?offset=00&limit=151`
 const [pokemon, setPokemon] = useState(null)
  const getPokemon = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data);
  };
  useEffect(() => {
    getPokemon([]);
  }, []);

  

    return (
        <div className='pokemon'>
            {pokemon.result.map((poke) =>{
                const {name} = poke;
                return (
                    <Link to={`${name}`}>
                        <h3>{name}</h3>
                    </Link>    
                );
            } )}   
       
        </div>
    )
}
export default Main