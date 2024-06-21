import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import { toast } from 'react-toastify';

export default function Private({ children }) {
    const navigate = useNavigate();
    const { signed } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if(!signed && location.pathname.toLocaleLowerCase().trim() === '/anuncio'){
            toast.info('Primeiro faça login ou registre-se')
            navigate('/signin');
        }
        if(!signed && location.pathname.toLocaleLowerCase().trim() === '/profile'){
            toast.info('Primeiro faça login ou registre-se')
            navigate('/signin');
        }
    }, [signed, navigate, location.pathname]);

    return children;
}
