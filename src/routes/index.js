import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import EsqueciSenha from '../pages/EsqueciSenha'
import Error from '../pages/Error-404/Error.js'
import Private from './Private'

export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/signin" element={<Private>  <SignIn /> </Private> } />
            <Route path="/signup" element={ <Private> <SignUp /> </Private> } />
            <Route path="/" element={ <Private> <Home /> </Private>} />
            <Route path="/forgotpassword" element={ <Private> <EsqueciSenha /> </Private> } />
            <Route path='*' element={<Error/>}/>
        </Routes>
    )
}