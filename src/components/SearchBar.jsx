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
         <div className='divSearch'>
            <input type='search' placeholder='Nombre Personaje' onChange={handleInputChange} />
            <button onClick={() => onSearch(nombre)}>Agregar</button>
         </div>
      );
   }
}
