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

   const paginaPersonajes = async (hoja = 1) => {
      let response;
      if (hoja === 1) {
         response = await fetch(`https://rickandmortyapi.com/api/character/`)
      } else {
         response = await fetch(`https://rickandmortyapi.com/api/character/?page=${hoja}`)
      }
      const { results } = await response.json()
      return results
   }

   const onSearch = async (character) => {
      let results = [];
      let data = []; 
      try {
         for (let i = 1; i < 42; i++) {
            const pagina = await paginaPersonajes(i)
            results = [...results, ...pagina]
         }
         data = results.filter((charac) =>
            charac.name.toLowerCase().includes(character.toLowerCase())
         )
      } catch (error) {
         console.error(error)
      }

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
               remoto.favorite = false;
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