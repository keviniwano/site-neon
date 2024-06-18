import React, { useState ,useEffect ,useContext } from 'react';
import { Link } from 'react-router-dom'
import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/auth'
import avatar from '../../assets/images/avatar.jpg'
import '../../assets/sass/header.css'
export default function Header(){

    const { user, logOut } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user !== null && user !== undefined) {
            setIsLoading(false);
        }
    }, [user]);

    if (isLoading) {
        return (
            <div className='loader-container'>
                <div className="loader2"></div>
            </div>
        )
    }

    return(
        <nav id='Sidebar'>
            <div className='avatar-container'>
                <img 
                loading="lazy" 
                src={user && user.avatarUrl ? user.avatarUrl : avatar} 
                className='avatar'
                alt='User'/>
            </div>

        <Link to='/' className='link'>
            <FiHome size={22} color='#fff'/>
            Chamados
        </Link>
        <Link to='/imoveis' className='link'>
            <FiUser size={22} color='#fff'/>
            Imóveis
        </Link>
        <Link to='/profile' className='link'>
            <FiSettings size={22} color='#fff'/>
            perfil
        </Link>
        <Link to='/' className='link' onClick={()=>logOut(false)}>
            <FiLogOut size={22} color='#fff'/>
            Sair
        </Link>

        </nav>
    )
}