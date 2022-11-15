import { Button, FormControl, FormHelperText, Box, Link } from '@chakra-ui/react';
import React from 'react';
import InputForm from './InputForm';
import { useNavigate } from 'react-router-dom';

const FormSignUp = (props) => {
  const {submitForm, stateInput, error} = props;
  const navigate = useNavigate();
  const email = {
    label: "Email Address",
    type: "email",
    name: "email",
    stateInput: stateInput,
    spacing: "1rem"
  }

  const password = {
    ...email,
    name: "password",
    type: "password",
    label: "Password",
  }

  const confirmPassword ={
    ...password,
    label: "Confirm Password",
    name: "confirmPassword",
  }

  const directToLogin = () => {
    navigate("/login")
  }

  return (
    <FormControl as="form" onSubmit={submitForm}>
      <InputForm {...email} />
      <InputForm {...password} />
      <InputForm {...confirmPassword} />
      <FormHelperText my="1rem">{error}</FormHelperText>
      <Box display="flex" gap="1rem">
        <Button variant="outline" colorScheme="whatsapp" mt="1rem" type="submit">Register</Button>
        <Link alignSelf="end" mb="0.7rem" onClick={directToLogin}>Login</Link>
      </Box>
    </FormControl>
  )
}

export default FormSignUp