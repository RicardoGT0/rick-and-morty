import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import About from './components/About'
import Details from './components/Details'
import Root from './components/Root'
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
          setCharacters((oldData) => [...oldData, ...data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    const lista = characters.filter((personaje) => personaje.id !== id)
    setCharacters(lista)
  }

  return (
    <div className='App'>
      <Nav func={onSearch} />
      <hr />
      <Routes>
        <Route
          path="/"
          element={<Root />}
        />
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/details/:id"
          element={<Details />}
        />
      </Routes>
    </div>
  )
}

export default App
