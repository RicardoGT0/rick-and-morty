import React from 'react'
import SearchBar from './SearchBar'
import './Nav.css'
import { Link } from 'react-router-dom'



export default function Nav({ func }) {
    return (
        <nav>
            <div className='linkBox'>
                <Link to="home" className='enlaces'>Inicio</Link>
                {/* <Link to="details" className='enlaces'>Detalles</Link> */}
                <Link to="about" className='enlaces'>Acerca de</Link>
            </div>
            <SearchBar onSearch={func} />
        </nav>
    )
}
