import React from 'react'
import './Detail.css'

export default function Detail({ character }) {
    const { id, status, species, type, gender, origin, location, image, created } = character
    
    return (
        <div className='Detail'>
            <div className='detailBox'>
                <img className='detailImg' src={image} alt='' />
                <div className='detailDescription'>
                    <div>
                        <h1 className='textdetail'>ID: {id}</h1>
                        <h1 className='textdetail'>Status: {status}</h1>
                        <h1 className='textdetail'>Especie: {species}</h1>
                        <h1 className='textdetail'>Tipo: {type}</h1>
                        <h1 className='textdetail'>Genero: {gender}</h1>
                        <h1 className='textdetail'>Origen: {origin.name}</h1>
                        <h1 className='textdetail'>Ubicacion: {location.name}</h1>
                        <h1 className='textdetail'>Fecha del episodio: {created}</h1>
                    </div>
                </div>
            </div>

        </div >
    );
}
