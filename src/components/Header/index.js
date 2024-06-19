import React, { useState ,useEffect ,useContext } from 'react';
import { Link } from 'react-router-dom'
import logo from  '../../assets/images/logo.png';

import { AuthContext } from '../../contexts/auth'
import avatar from '../../assets/images/avatar.jpg'
import '../../assets/sass/header.css'
export default function Header(){

    const { user, logOut } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true);

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
                    <Link to='/sobre' className='link'>
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link to='/contato' className='link'>
                        Fale Conosco
                    </Link>
                </li>
                <li>
                    <Link to='/' className='link' onClick={()=>logOut(false)}>
                        Sair
                    </Link>
                </li>
            </ul>

            <a href='/profile' className='avatar-link'>
                <img src={user && user.avatarUrl ? user.avatarUrl : avatar} className="avatar" alt="avatar"/>
            </a>
        </nav>
    )
}