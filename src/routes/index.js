import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import EsqueciSenha from '../pages/EsqueciSenha'
import Error from '../pages/Error-404'
import Anuncio from '../pages/Anunciar'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/signin" element={ <SignIn /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/forgotpassword" element={ <EsqueciSenha /> } />
            <Route path="/anuncio" element={ <Anuncio /> } />
            <Route path='*' element={ <Error/> }/>
        </Routes>
    )
}