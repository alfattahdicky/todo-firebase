import {FormControl, Box, FormHelperText, Link, Button} from "@chakra-ui/react";
import InputForm from "./InputForm";

const FormLogin = (props) => {
  const {submitForm, stateInput, error} = props;
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


  return (
    <FormControl as="form" onSubmit={submitForm}>
      <InputForm {...email} />
      <InputForm {...password} />
      <FormHelperText my="1rem">{error}</FormHelperText>
      <Box display="flex" gap="1rem">
        <Button variant="outline" colorScheme="whatsapp" mt="1rem" type="submit">Login</Button>
      </Box>
    </FormControl>
  )
}

export default FormLogin