/* 
Esta tarjeta va a mostrar el 
nombre de un personaje, su especie, género e imagen.

Además cuando el usuario haga click en la X de "cerrar", 
se invocará una función que también viene como props.

Este componente Card va a recibir las siguientes props:

name: Nombre
species: Especie
gender: Género
image: Imagen
onClose: La función que se va a ejecutar cuando el usuario haga click 
         en el botón de cerrar.

*/
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Card.css'
import * as actions from '../redux/actions'



export default function Card({ id, name, species, gender, image, onClose, favorite }) {
   const dispatch = useDispatch()
   const setFavorite = (id) => (dispatch(actions.setFavorite(id)))

   return (
      <div className='card'>
         <div className='divButton'>
            <button className='buttonCard'
               onClick={() => setFavorite(id)}
            >{favorite ? '💜' : '🖤'}</button>

            {onClose ? <button className='buttonCard'
               onClick={() => { onClose(id) }}>X</button> : null}
         </div>

         <div className='descriptionbox'>
            <Link to={`/details/${id}`} >
               <img className='imgChar' src={image} alt='' />
            </Link>
            <div className='description'>
               <div>
                  <h2>{name}</h2>
                  <h2>{species}</h2>
                  <h2>{gender}</h2>
               </div>
            </div>
         </div>

      </div >
   );
}
