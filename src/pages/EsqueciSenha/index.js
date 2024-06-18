// src/EsqueciSenha.js
import React, { useState, useContext, useEffect } from 'react';
import Button from '../../components/Button'
import { AuthContext } from '../../contexts/auth';
import '../../assets/sass/esquecisenha.css'
const EsqueciSenha = () => {
    const [email, setEmail] = useState('');
    const [buttonControl, setButtonControl] = useState(true);

    const { loadingAuth, emailauth, EsqueciSenha } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        EsqueciSenha(email)
    };

    useEffect(()=>{
        if(email){
            setButtonControl(false);
        }else{
            setButtonControl(true);
        }
    }, [email])

    useEffect(()=>{
        setEmail(emailauth);
    },[emailauth])

    return (
        <div id="EsqueciSenha">
            <div className='content'>
                <h2>Esqueci a Senha</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                    Email:
                    <input type="email" placeholder="Email" id='email' onChange={
                        (e)=>{
                            setEmail(e.target.value)
                        }
                    } required/>
                    </label>
                    <Button
                        text={loadingAuth ? <div className="loader"></div> : 'Enviar'}
                        onClick={()=>handleSubmit}
                        buttonDisabled={buttonControl}
                        buttonType='submit'
                    />
                    <span className='sign-message-content'>Um link para redefinição de senha será enviado para seu email</span>
                </form>
            </div>
        </div>
    );
};

export default EsqueciSenha;
