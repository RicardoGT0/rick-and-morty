import React from 'react'
import SearchBar from './SearchBar'
import './Nav.css'


export default function Nav({func}) {
    return (
        <nav>
            <SearchBar onSearch={func} />

        </nav>
    )
}
