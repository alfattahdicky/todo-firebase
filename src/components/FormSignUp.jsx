import {
  Button,
  FormControl,
  FormHelperText,
  Box,
  Link,
  Input
} from "@chakra-ui/react";
import React from "react";
import InputForm from "./InputForm";
import { useNavigate } from "react-router-dom";

const email = {
  label: "Email Address",
  type: "email",
  name: "email",
  spacing: "1rem",
};

const password = {
  ...email,
  name: "password",
  type: "password",
  label: "Password",
};

const confirmPassword = {
  ...password,
  label: "Confirm Password",
  name: "confirmPassword",
};

const FormSignUp = (props) => {
  const { submitForm, stateInput, error } = props;
  const navigate = useNavigate();

  const directToLogin = () => {
    navigate("/login");
  };

  return (
    <FormControl as="form" onSubmit={submitForm}>
      {/* <InputForm {...email} stateInput={stateInput} /> */}
      <InputForm type="email" name="email" stateInput={stateInput}  />
      <InputForm {...password} stateInput={stateInput} />
      <InputForm {...confirmPassword} stateInput={stateInput} />
      <FormHelperText my="1rem">{error}</FormHelperText>
      <Box display="flex" gap="1rem">
        <Button
          variant="outline"
          colorScheme="whatsapp"
          mt="1rem"
          type="submit"
        >
          Register
        </Button>
        <Link alignSelf="end" mb="0.7rem" onClick={directToLogin}>
          Login
        </Link>
      </Box>
    </FormControl>
  );
};

export default FormSignUp;
