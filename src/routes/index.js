import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import EsqueciSenha from '../pages/EsqueciSenha'
import Error from '../pages/Error-404'
import Anuncio from '../pages/Anunciar'
import Fotos from '../pages/Fotos'
import Imoveis from '../pages/Imoveis'
import Profile from '../pages/Profile'
import Private from './Private'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/signin" element={ <SignIn /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/forgotpassword" element={ <EsqueciSenha /> } />
            <Route path="/anuncio" element={<Private> <Anuncio /> </Private>} />
            <Route path="/anuncio/:uid" element={<Private> <Fotos /> </Private>} />
            <Route path="/imoveis" element={ <Imoveis /> } />
            <Route path="/profile" element={<Private>  <Profile /> </Private>} />
            <Route path='*' element={ <Error/> }/>
        </Routes>
    )
}