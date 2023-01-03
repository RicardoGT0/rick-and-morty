import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar({ onSearch }) {

   const [nombre, setNombre] = useState('')
   const handleInputChange = ({ target }) => {
      setNombre(target.value)
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
