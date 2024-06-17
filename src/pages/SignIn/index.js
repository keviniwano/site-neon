import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom' 
import '../../assets/sass/signup.css'
import Button from '../../components/Button'

import logo from  '../../assets/images/logo.png';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonControl, setButtonControl] = useState(true);

    async function handleLogin(e){
        e.preventDefault();
        console.log("submit");
    }

    function handleButton(){
        if(email && password){
            setButtonControl(false);
        }else{
            setButtonControl(true);
        }
    }

    useEffect(()=>{
        handleButton()
    }, [email, password])

    return(
        <div id="SignIn">
            <div className="content">
                <img src={logo} className="logo" alt="logo"/>
                <form onSubmit={ handleLogin } className='form-signin'>
                    <h1>Bem-vindo de volta!</h1>
                    <h3>Sentimos saudade</h3>
                    <input type="email" placeholder="Email" id='email' onChange={
                        (e)=>{ setEmail(e.target.value)}
                    } required/>
                    <input type="password" placeholder="Senha" id='password' onChange={
                        (e)=>{ setPassword(e.target.value)}
                    } required/>
                    <Button
                        text='Login'
                        onClick={()=>handleLogin}
                        buttonDisabled={buttonControl}
                    />
                    <span className='sign-message-content'>Você poderá alterar seu nome no seu perfil depois</span>
                    <div className='react-link-text'> Ainda não é um membro? <Link to='/signUp' className='register-link'>Registre-se</Link> </div>
                </form>
            </div>
        </div>
    )
}