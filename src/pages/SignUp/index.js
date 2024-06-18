import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom' 
import '../../assets/sass/signup.css'
import Button from '../../components/Button'
import { AuthContext } from '../../contexts/auth';

import logo from  '../../assets/images/logo.png';

export default function SignUp(){
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonControl, setButtonControl] = useState(true);

    const { signUp, loadingAuth, setLoadingAuth } = useContext(AuthContext)

    async function handleSubmit(e){
        e.preventDefault();
        validateForm() ? await signUp(nome, sobrenome, email, password) : setLoadingAuth(false)
    }

    function validateForm(){
        let regular = true;

        if (nome.length <= 3){
            document.getElementById('nome').style.border = '1px solid red';
            //setNomeConsole('O Nome não pode ser nulo')
            regular = false
        } else {
            document.getElementById('nome').style.border = '1px solid rgb(113, 113, 113)';
        }

        if (sobrenome.length === 0){
            document.getElementById('sobrenome').style.border = '1px solid red';
            //setSobrenomeConsole('O sobrenome não pode ser nulo')
            regular = false
        } else {
            document.getElementById('sobrenome').style.border = '1px solid rgb(113, 113, 113)';
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!regex.test(email)){
            document.getElementById('email').style.border = '1px solid red';
            //setEmailConsole('Email inválido')
            regular = false
        } else {
            document.getElementById('email').style.border = '1px solid rgb(113, 113, 113)';
        }

        if (password.length < 8) {
            document.getElementById('password').setCustomValidity("A senha deve ter pelo menos 8 caracteres.");
            document.getElementById('password').style.border = '1px solid red';
            //setPassConsole('A senha deve ter pelo menos 8 caracteres')
            regular = false
        } else {
            document.getElementById('password').style.border = '1px solid rgb(113, 113, 113)';
        }

        return regular;
    }

    useEffect(()=>{
        if(nome && sobrenome && email && password){
            setButtonControl(false);
        }else{
            setButtonControl(true);
        }
    }, [nome, sobrenome, email, password])

    return(
        <div id="SignUp">
            <div className="content">
                <img src={logo} className="logo" alt="logo"/>
                <form onSubmit={ handleSubmit } className='form-signup'>
                    <h1>Olá, qual é o seu nome?</h1>
                    <h3>Vamos começar com algumas informações basicas.</h3>
                    <span className='first-input-control'>
                        <input type="text" placeholder="Nome" id='nome' onChange={
                            (e)=>{ setNome(e.target.value)}
                        } required/>
                        <input type="text" placeholder="Sobrenome" id='sobrenome' onChange={
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
                        text={loadingAuth ? <div className="loader"></div> : 'Cadastrar'}
                        onClick={()=>{handleSubmit()}}
                        buttonDisabled={buttonControl}
                        buttonType='submit'
                    />
                    <span className='sign-message-content'>Você poderá alterar seu nome no seu perfil depois</span>
                    <div className='react-link-text'> Já é um membro? <Link to='/signIn' className='register-link'>Login</Link> </div>
                </form>
            </div>
        </div>
    )
}