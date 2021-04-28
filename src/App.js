
import './App.css';
import Header from './Header';
import Main from './Main';
import React, {useState} from 'react'

function App() {

  const [team, setTeam] = useState([])
  const addToTeam = (pokemon) => {
    setTeam(...pokemon, pokemon )
  }
  const takeFromTeam = (index) => {
    const newArr = team.filter((poke, i) => i !== index)
    setTeam(newArr)
  } 


  return (
    <div className="App">
     <Header />
     <Main />
    </div>
  );
}

export default App;
