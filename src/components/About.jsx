import React from 'react'
import "./About.css";

export default function About() {
  return (
    <div className='divAbout'>
      <h1 className='textabout'>Acerca del desarrollador</h1>
      <h1 className='textabout'>Fecha de elaboracion: Diciembre 2022</h1>
      <h1 className='textabout'>Nombre: Ricardo González Tello</h1>
      <h1 className='textabout'>Titulo: M. en T. de Computo</h1>
      <div>
        <a className='textabout'
          target="_blank"
          rel="noreferrer"
          href='https://www.linkedin.com/in/ricardo-gonzalez-tello-7643bb1a9'
        >LinkedIn</a>
      </div>
      <div> 
        <a className='textabout'
          target='_blank'
          rel="noreferrer"
          href="https://github.com/RicardoGT0"
        >GitHub</a>
      </div>
    </div>
  )
}

