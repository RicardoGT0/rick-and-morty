import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import * as action from '../redux/actions'
import './SearchBar.css'

function SearchBar({ cards, setCards }) {

   const [nombre, setNombre] = useState('')
   const handleInputChange = ({ target }) => {
      setNombre(target.value)
   }

   const onSearch = async (character) => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/`)
      const {results} = await response.json()
      const data = results.filter((charac) =>
         charac.name.toLowerCase().includes(character.toLowerCase())
      )
      if (data) {
         const nuevo = [];
         data.forEach(remoto => {
            let flag = false
            cards.forEach(local => {
               if (remoto.id === local.id) {
                  flag = true;
               }
            });
            if (!flag) {
               remoto.favorite=false;
               nuevo.push(remoto)
            }
         });
         setCards([...cards, ...nuevo]);
      } else {
         alert('No hay personajes con ese ID');
      }
   };


   const Location = useLocation()
   if (Location.pathname === '/home') {
      return (
         <form className='divSearch' onSubmit={(e) => { e.preventDefault() }}>
            <input type='search' placeholder='Nombre Personaje' onChange={handleInputChange} />
            <button className='buttonSearch' onClick={() => onSearch(nombre)} type='submit'>Agregar</button>
         </form>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      cards: state.cards,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setCards: (cardsData) => dispatch(action.setCards(cardsData))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)