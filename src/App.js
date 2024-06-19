import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './contexts/auth.js';
import Header from './components/Header';
import WhatsApp from './components/WhatsApp'

export default function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent/>
      </AuthProvider>
    </BrowserRouter>
  );
}

function AppContent(){
  const location = useLocation()
  const [showHeader, setShowHeader] = useState()

  useEffect(()=>{
    if(location.pathname !== '/signin' && location.pathname !== '/signup'){
      setShowHeader(true)
    }else{
      setShowHeader(false)
    }
  }, [location])

  return(
    <>
      {showHeader && <Header />}
      <ToastContainer autoClose={2500} />
      {showHeader && <WhatsApp/>}
      <RoutesApp />
    </>
  )
}
