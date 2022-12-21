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
import './Card.css'

export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className='card'>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" /> 
      </div>
   );
}
