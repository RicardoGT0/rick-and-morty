/* 
Este Componente nos va a servir para renderizar varios componentes Card.

Básicamente, va a recibir un arreglo de personajes (con todos sus datos), 
y va a utilizar un componente Card (reutilizando el mismo que ya hicimos 
en el punto anterior) por cada uno de ellos, pasándole las props correspondientes.

Tip: Usar el método map y devolver un componente Card por cada elemento del arreglo.
Acá un ejemplo de la documentación de React.

*/
import './Cards.css';
import Card from './Card';
import { connect } from 'react-redux';
import * as action from '../redux/action_type'


function Cards({characters, setCards}) {
   
   const onClose = (id) => {
      const lista = characters.filter((personaje) => personaje.id !== id)
      setCards(lista)
    }

   const lista = characters.map((c, index) => {
      return (
         <Card key={index}
            name={c.name}
            species={c.species}
            gender={c.gender}
            image={c.image}
            onClose={onClose}
            id={c.id}
         />
      )
   });
   return <>
      <div id='cards'>{lista}</div>
   </>

}

const mapStateToProps=(state)=>{
   return{
      characters:state.cards,
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
export default connect(mapStateToProps,mapDispatchToProps)(Cards)