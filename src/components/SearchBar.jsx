import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import * as action from '../redux/action_type'
import './SearchBar.css'

 function SearchBar({ cards,setCards }) {

   const [nombre, setNombre] = useState('')
   const handleInputChange = ({ target }) => {
      setNombre(target.value)
   }

   const onSearch = (character) => {
      fetch(`https://rickandmortyapi.com/api/character/`)
        .then((response) => response.json())
        .then(({ results }) => {
          const data = results.filter((charac) => charac.name.toLowerCase().includes(character.toLowerCase()))
          if (data) {
            setCards([...cards, ...data]);
          } else {
            alert('No hay personajes con ese ID');
          }
        });
    }
  
   const Location = useLocation()
   if (Location.pathname === '/home') {
      return (
         <form className='divSearch' onSubmit={(e)=>{e.preventDefault()}}>
            <input type='search' placeholder='Nombre Personaje' onChange={handleInputChange} />
            <button className='buttonSearch' onClick={() => onSearch(nombre)} type='submit'>Agregar</button>
         </form>
      );
   }
}

const mapStateToProps=(state)=>{
   return{
      cards:state.cards,
   }
}

const mapDispatchToProps=(dispatch)=>{
   return{
      setCards: (cardsData)=>dispatch({
         type: action.SETCARDS,
         payload: cardsData,
      })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)