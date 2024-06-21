import React, { useState ,useEffect ,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import logo from  '../../assets/images/logo.png';
import { CiLogin } from "react-icons/ci";

import { AuthContext } from '../../contexts/auth'
import avatar from '../../assets/images/avatar.jpg'
import '../../assets/sass/header.css'
export default function Header(){

    const { user, logOut, signed, loadingAuth} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    return(
        <nav id='Menu'>
            <a href='/' className='link'>
                <img src={logo} className="logo" alt="logo"/>
            </a>
            <ul>
                <li>
                    <Link to='/' className='link'>
                        Início
                    </Link>
                </li>
                <li>
                    <Link to='/imoveis' className='link'>
                        Buscar Imóveis
                    </Link>
                </li>
                <li>
                    <Link to='/anuncio' className='link'>
                        Anuncie seu Imóvel
                    </Link>
                </li>
                <li>
                    <a href='http://localhost:3000/#sobre' className='link'>
                        Sobre
                    </a>
                </li>
                <li>
                    <a href='http://localhost:3000/#contato' className='link'>
                        Fale Conosco
                    </a>
                </li>

                {
                    signed &&
                    <li>
                        <Link to='/signin' className='link' onClick={()=>logOut(false)}>
                            Sair
                        </Link>
                    </li>
                }
            </ul>

            <div className='avatar-link'>
                {
                    signed ? 
                        <a href='/profile'>
                            <img src={user && user.avatarUrl ? user.avatarUrl : avatar} className="avatar" alt="avatar"/>
                        </a> 
                    : 
                        <div className='button-container'>
                            <Button
                                text={loadingAuth ? <div className="loader"></div> : <span>Entrar <CiLogin size={28} color='#fff'/></span>}
                                onClick={
                                    ()=>navigate('/signin')
                                }
                            />
                            <Button
                                text={loadingAuth ? <div className="loader"></div> : 'Cadastrar'}
                                onClick={
                                    ()=>navigate('/signup')
                                }
                            />
                    </div>
                }
            </div>
        </nav>
    )
}