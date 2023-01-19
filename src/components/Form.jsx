import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import * as action from '../redux/actions'


function Form({ accessOn }) {
    const [passWord, setPassWord] = useState('')
    const [userName, setUserName] = useState('')
    const [errorUser, SetErrorUser] = useState(true)
    const [errorPassword, setErrorPassword] = useState(true)
    const regularPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/; //al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres, no permite espacios.
    const regularUser = /\S+@\S+\.\S+/; //un correo electronico
    const textErrorUser = 'El Nombre de Usuario debe ser un Correo'
    const textErrorPassword = 'La Contraseña debe ser de 8 Caracteres o mas y debe de contener Mayusculas, Minusculas, Numeros, sin espacios ni caracteres especiales'
    const textErrorGeneral = 'Nombre de Usuario y/o Contraseña no Validos'
    const navigate = useNavigate();

    const login = () => {
        //if (passWord === password && userName === username) {
        accessOn({ userName, passWord });
        navigate("/home");
        alert(`Bienvenidos a nuestra app ${userName}`);
        /* } else {
            alert("username y password incorrectos");
        } */
    }

    const valUser = (value) => {
        if (regularUser.test(value)) {
            SetErrorUser(false)
        } else {
            SetErrorUser(true)
        }
        setUserName(value)
    }

    const valPassword = (value) => {
        if (regularPassword.test(value)) {
            setErrorPassword(false)
        } else {
            setErrorPassword(true)
        }
        setPassWord(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login()
    }

    const errorMessage = () => {
        if (errorUser && errorPassword) {
            return <span className='spanError'>{textErrorGeneral}</span>
        }
        if (errorUser) {
            return <span className='spanError'>{textErrorUser}</span>
        }
        if (errorPassword) {
            return (<span className='spanError'>{textErrorPassword}</span>)
        }
        return <button className='buttonLogin' type='submit'>Acceder</button>
    }

    return (
        <form className="divForm" onSubmit={((e) => { handleSubmit(e) })}>
            <h2 className='loginText'>Login</h2>
            <div className='divCaptura'>
                <div className='divFormInput'>
                    <label className='labelLogin'>Usuario: </label>
                    <input className={`inputLogin ${errorUser ? 'dangerInputLogin' : null}`}
                        type="text"
                        name="userName"
                        value={userName}
                        placeholder="Username@domain.com"
                        onChange={(e) => valUser(e.target.value)} />
                </div>
                <div className='divFormInput'>
                    <label className='labelLogin'>Contraseña: </label>
                    <input className={errorPassword ? 'dangerInputLogin' : 'inputLogin'}
                        type="password"
                        name='password'
                        value={passWord}
                        placeholder='Password'
                        onChange={(e) => valPassword(e.target.value)} />
                </div>
            </div>
            <div className='divError'>
                {errorMessage()}
            </div>
        </form>

    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        accessOn: (userData) => dispatch(action.accessOn(userData))
    }
}

export default connect(null, mapDispatchToProps)(Form)