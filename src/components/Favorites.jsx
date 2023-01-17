import './Favorites.css';
import Card from './Card';
import { useSelector } from 'react-redux';


function Favorites() {
   //characters -> lista de personajes
   const characters = useSelector((state)=>state.cards)
   

   const favorites= characters.filter((personaje)=>personaje.favorite===true)
   const lista = favorites.map((c, index) => {
      return (
         <Card key={index}
            name={c.name}
            species={c.species}
            gender={c.gender}
            image={c.image}
            id={c.id}
            favorite={c.favorite}
         />
      )
   });

   return <>
      <div id='favorites'>{lista}</div>
   </>

}



 export default Favorites