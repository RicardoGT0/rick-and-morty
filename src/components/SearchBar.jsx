import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({onSearch}) {
   
   const [nombre, setNombre] = useState('')
   const handleInputChange=({target})=>{
      setNombre(target.value)
   }


   return (
      <div className='divSearch'>         
         <input type='search' placeholder='Nombre Personaje' onChange={handleInputChange}/>
         <button onClick={()=>onSearch(nombre)}>Agregar</button>
      </div>
   );
}
