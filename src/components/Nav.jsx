import React from 'react'
import SearchBar from './SearchBar'
import './Nav.css'
import { Link, useLocation } from 'react-router-dom'



export default function Nav({ func }) {
    const location = useLocation();
    console.log(location);
    if (location.pathname !== '/') {
        return (
            <nav>
                <div className='linkBox'>
                    <Link to="home" className='enlaces'>Inicio</Link>
                    <Link to="about" className='enlaces'>Acerca de</Link>
                </div>
                <SearchBar onSearch={func} />
            </nav>
        )
    }

}
