import React from 'react'
import './Form.css'

export default function Form() {
    
    return (
        <>
            <div className="divForm">
                <h2 className='loginText'>Login</h2>
                <div className='divCaptura'>
                    <label className='labelLogin'>Usuario: </label>
                    <input className='inputLogin' type="text" />
                    <label className='labelLogin'>Contraseña: </label>
                    <input className='inputLogin' type="text" />
                </div>
                <button className='buttonLogin'>Acceder</button>
            </div>
        </>
    )
}
