import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import SignUp from "./pages/SignUp";
import Login from './pages/Login';
import Home from './pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './data/firebase';
import PrivateRoute from "./utils/PrivateRoute"

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const {pathname} = useLocation();

  useEffect(() => {
    const splitPathname = pathname.slice(1).length;
    if(splitPathname === 28) {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user.email);
      });
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/:userId" 
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
