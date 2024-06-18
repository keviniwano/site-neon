import React, { useState ,useEffect ,useContext } from 'react';
import { Link } from 'react-router-dom'
import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/auth'
import avatar from '../../assets/images//logo.png'
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
                src={avatar} 
                className='avatar'
                alt='User'/>
            </div>

        <Link to='/' className='link'>
            <FiHome size={22} color='#fff'/>
            Home
        </Link>
        <Link to='/signin' className='link' onClick={()=>logOut(false)}>
            <FiLogOut size={22} color='#fff'/>
            Sair
        </Link>

        </nav>
    )
}