import { Text, useToast } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import WrapForm from '../components/WrapForm';
import auth from '../data/firebase';
import useForm from '../hooks/useForm';

const Login = () => {
  const [state, setState] = useForm({email: "", password: ""})
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const {email, password} = state;
    try{
      const loginCredential = await signInWithEmailAndPassword(auth, email, password);
      const {refreshToken, registered} = loginCredential["_tokenResponse"];
      if(registered) {
        const objToken = { refreshToken,registered}
        localStorage.setItem("auth", JSON.stringify(objToken))
        toast({
          position: "top-right",
          title: "Success Login",
          status: "success",
          duration: 2000
        });
        setTimeout(() => {
          navigate("/home");
        }, 3000)
      }else {
        setError("Your email not registered");
      }
    }catch(error) {
      throw new Error("Cannot Login with Email & Password");
    }
  }

  return (
    <WrapForm bg="#456">
      <Text as="h1" fontSize="1.8rem" fontWeight="600">Login</Text> 
      <FormLogin submitForm={onSubmitForm} error={error} stateInput={setState} />
    </WrapForm>
  )
}

export default Login