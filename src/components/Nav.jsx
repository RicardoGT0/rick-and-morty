import React from 'react'
import SearchBar from './SearchBar'
import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { accessOff } from '../redux/actions'

function Nav({ func, accessOff }) {
    const location = useLocation();
    if (location.pathname !== '/') {
        return (
            <nav>
                <div className='linkBox'>
                    <Link to="home" className='enlaces'>Inicio</Link>
                    <Link to="favorites" className='enlaces'>Favoritos</Link>
                    <Link to="about" className='enlaces'>Acerca de</Link>
                    <button className='enlaces enlacesBoton' onClick={accessOff}>LogOut</button>
                    <SearchBar onSearch={func} />
                </div>
            </nav>
        )
    }
}

export default connect(null, { accessOff })(Nav)