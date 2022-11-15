import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import SignUp from "./pages/SignUp";
import Login from './pages/Login';
import Home from './pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './data/firebase';
import PrivateRoute from "./utils/PrivateRoute"

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const {pathname} = useLocation();

  useEffect(() => {
    if(pathname === "/home") {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser({...user});
      })
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/home" 
        element={
          <AuthProvider value={currentUser}>
            <Home />
          </AuthProvider>
        } />
      </Route>
    </Routes>
  )
}

export default App
