import {useState} from "react";
import {auth} from "../data/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useForm from "../hooks/useForm";
import FormSignUp from "../components/FormSignUp";
import {Text, useToast} from "@chakra-ui/react";
import WrapForm from "../components/WrapForm";
import { validationPassword } from "../utils/validation";

const SignUp = () => {
  const [state, setState, reset] = useForm({email: "", password: "", confirmPassword: ""});
  const [error, setError] = useState("");
  const toast = useToast();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const {email, password} = state
    console.log(state);
    
    if(validationPassword(state, setError)) {
      try{
        await createUserWithEmailAndPassword(auth, email, password);
        toast({
          title: "Account Created",
          description: "Success we created account for you.",
          status: "success",
          duration: 6000,
          isClosable: true
        });
      }catch(err) {
        setError("Authenticated Error")
      }
    }else {
      setError("Validation Wrong");
    }
  }
  
  return (
    <WrapForm bg="#5676">
      <Text as="h1" fontSize="1.8rem" fontWeight="600" >Sign Up</Text>
      <FormSignUp submitForm={onSubmitForm} stateInput={setState} error={error} />
    </WrapForm>
  )
}

export default SignUp;