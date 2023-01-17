import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import About from './components/About'
import Details from './components/Details'
import Root from './components/Root'
import Favorites from './components/Favorites'
import { useSelector } from 'react-redux'
/* import characters from './data.js' */

function App() {
  const navigate = useNavigate();
  const access = useSelector((state)=>state.access);

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  
  return (
    <div className='App'>
      <Nav />
      <hr />
      <Routes>
        <Route
          path="/"
          element={<Root />}
        />
        <Route
          path="/home"
          element={<Cards />}
        />        
        <Route
          path="/favorites"
          element={<Favorites />}
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
