import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import * as action from '../redux/action_type'


function Form({ accessOn }) {
    const [passWord, setPassWord] = useState('')
    const [userName, setUserName] = useState('')
    const [errorUser, SetErrorUser] = useState(true)
    const [errorPassword, setErrorPassword] = useState(true)
    const regularPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/; //al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres, no permite espacios.
    const regularUser = /\S+@\S+\.\S+/; //un correo electronico
    const textError = 'Nombre de Usuario y/o Contraseña no Validos'
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

    return (
        <form className="divForm" onSubmit={((e) => { handleSubmit(e) })}>
            <h2 className='loginText'>Login</h2>
            <div className='divCaptura'>
                <div>
                    <label className='labelLogin'>Usuario: </label>
                    <input className={errorUser ? 'dangerInputLogin' : 'inputLogin'}
                        type="text"
                        name="userName"
                        value={userName}
                        placeholder="Username"
                        onChange={(e) => valUser(e.target.value)} />
                </div>
                <div>
                    <label className='labelLogin'>Contraseña: </label>
                    <input className={errorPassword ? 'dangerInputLogin' : 'inputLogin'}
                        type="password"
                        name='password'
                        value={passWord}
                        placeholder='Password'
                        onChange={(e) => valPassword(e.target.value)} />
                </div>
            </div>
            {errorUser || errorPassword ?
                <span>{textError}</span> :
                <button className='buttonLogin' type='submit'>Acceder</button>}
        </form>

    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        accessOn: (userData) => dispatch({
            type: action.ACCESSON,
            payload: userData
        })
    }
}

export default connect(null, mapDispatchToProps)(Form)