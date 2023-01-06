import React from 'react'
import SearchBar from './SearchBar'
import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import {accessOff} from '../redux/actions'

function Nav({ func,accessOff }) {
    const location = useLocation();
    console.log(location);
    if (location.pathname !== '/') {
        return (
            <nav>
                <div className='linkBox'>
                    <Link to="home" className='enlaces'>Inicio</Link>
                    <Link to="about" className='enlaces'>Acerca de</Link>
                    <button className='enlaces' onClick={accessOff}>LogOut</button>
                </div>
                <SearchBar onSearch={func} />
            </nav>
        )
    }
}

export default connect (null,{accessOff})(Nav)