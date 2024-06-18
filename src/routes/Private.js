import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export default function Private({ children }) {
    const navigate = useNavigate();
    const { signed } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if (!signed && (location.pathname === '/signin' || location.pathname === '/')) {
            navigate('/');
        } else if(!signed && (location.pathname === '/signup')){
            navigate('/signup');
        } else {
            if (signed && (location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/signup')) {
                navigate('/home');
            }
        }
    }, [signed, navigate, location.pathname]);

    return children;
}
