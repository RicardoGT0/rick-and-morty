import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import About from './components/About'
import Details from './components/Details'
import Root from './components/Root'
/* import characters from './data.js' */

function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1Password';
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password === password && userData.userName === username) {
      setAccess(true);
      navigate("/home");
      alert("Bienvenidos a nuestra app");
    } else {
      alert("username y password incorrectos");
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.json())
      .then(({ results }) => {
        const data = results.filter((charac) => charac.name.toLowerCase().includes(character.toLowerCase()))
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
          element={<Root login={login} />}
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
