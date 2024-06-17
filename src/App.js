import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import RoutesApp from './routes';
import AuthProvider from './contexts/auth.js';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent/>
      </AuthProvider>
    </BrowserRouter>
  );

  function AppContent() {
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
      if(location.pathname === '/' || location.pathname === '/signin' || location.pathname === '/signup') {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    }, [location]);
    return (
      <>
        <RoutesApp/>
      </>
    );
  }
}

export default App;
