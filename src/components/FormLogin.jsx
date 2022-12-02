import {
  FormControl,
  Box,
  FormHelperText,
  Link,
  Button,
} from "@chakra-ui/react";
import InputForm from "./InputForm";
import { memo } from "react";

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

const FormLogin = (props) => {
  const { submitForm, stateInput, error } = props;

  return (
    <FormControl as="form" onSubmit={submitForm}>
      <InputForm {...email} stateInput={stateInput} />
      <InputForm {...password} stateInput={stateInput} />
      <FormHelperText my="1rem">{error}</FormHelperText>
      <Box display="flex" gap="1rem">
        <Button
          variant="outline"
          colorScheme="whatsapp"
          mt="1rem"
          type="submit"
        >
          Login
        </Button>
      </Box>
    </FormControl>
  );
};

export default memo(FormLogin);
