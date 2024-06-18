import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom' 
import '../../assets/sass/signup.css'
import Button from '../../components/Button'
import { AuthContext } from '../../contexts/auth';
import logo from  '../../assets/images/logo.png';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonControl, setButtonControl] = useState(true);

    const { signIn, loadingAuth, setLoadingAuth } = useContext(AuthContext);

    async function handleLogin(e){
        e.preventDefault();
        validateForm ? await signIn(email, password) : setLoadingAuth(false);
    }

    function validateForm(){
        let regular = true;

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
        if(email && password){
            setButtonControl(false);
        }else{
            setButtonControl(true);
        }
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
                        text={loadingAuth ? <div className="loader"></div> : 'Entrar'}
                        onClick={()=>handleLogin}
                        buttonDisabled={buttonControl}
                        buttonType='submit'
                    />
                    <span className='sign-message-content'>Você poderá alterar seu nome no seu perfil depois</span>
                    <div className='react-link-text'> Ainda não é um membro? <Link to='/signUp' className='register-link'>Registre-se</Link> </div>
                </form>
            </div>
        </div>
    )
}