import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'
import Detail from "./Detail";

export default function Details() {
    const { id } = useParams();
    const [character, setCharacter] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
                setCharacter(char);
                setIsLoading(false)
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [id]);

    if (isLoading) {
        return (<>
            <h1 className='textdetail'>...Cargando</h1>
        </>)
    } else {
        return (<>
            <h1 className='textdetail'>{character.name}</h1>
            <Detail character={character} />
        </>)
    }
}
