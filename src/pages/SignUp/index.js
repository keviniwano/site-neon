import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom' 
import '../../assets/sass/signup.css'
import Button from '../../components/Button'

import logo from  '../../assets/images/logo.png';

export default function SignUp(){
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonControl, setButtonControl] = useState(true);

    async function handleSubmit(e){
        e.preventDefault();
        console.log("submit");
    }

    function handleButton(){
        if(nome && sobrenome && email && password){
            setButtonControl(false);
        }else{
            setButtonControl(true);
        }
    }

    useEffect(()=>{
        handleButton()
    }, [nome, sobrenome, email, password])

    return(
        <div id="SignUp">
            <div className="content">
                <img src={logo} className="logo" alt="logo"/>
                <form onSubmit={ handleSubmit } className='form-signup'>
                    <h1>Olá, qual é o seu nome?</h1>
                    <h3>Vamos começar com algumas informações basicas.</h3>
                    <span className='first-input-control'>
                        <input type="text" placeholder="Nome" id='name' onChange={
                            (e)=>{ setNome(e.target.value)}
                        } required/>
                        <input type="text" placeholder="Sobrenome" id='surname' onChange={
                            (e)=>{ setSobrenome(e.target.value)}
                        } required/>
                    </span>
                    <input type="email" placeholder="Email" id='email' onChange={
                        (e)=>{ setEmail(e.target.value)}
                    } required/>
                    <input type="password" placeholder="Senha" id='password' onChange={
                        (e)=>{ setPassword(e.target.value)}
                    } required/>
                    <Button
                        text='Cadastrar'
                        onClick={()=>handleSubmit}
                        buttonDisabled={buttonControl}
                    />
                    <span className='sign-message-content'>Você poderá alterar seu nome no seu perfil depois</span>
                    <div className='react-link-text'> Já é um membro? <Link to='/signIn' className='register-link'>Login</Link> </div>
                </form>
            </div>
        </div>
    )
}