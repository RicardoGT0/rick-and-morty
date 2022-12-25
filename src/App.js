import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
/* import characters from './data.js' */

function App() {

  const [characters, setCharacters] = useState([])

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.json())
      .then(({ results }) => {
        const data = results.filter((charac) => charac.name.includes(character))
        console.log(data);
        if (data) {
          setCharacters((oldData)=>[...oldData,...data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose=(id)=>{
    const lista=characters.filter((personaje)=>personaje.id!==id)
    setCharacters(lista)
  }

  return (
    <div className='App'>
      <Nav func={onSearch} />
      <hr />
      <h1>{console.log(characters)}</h1>
      <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default App
