import { Box, FormLabel, Input } from "@chakra-ui/react";

const InputForm = ({ stateInput, label, type, spacing, name }) => {
  return (
    <Box my={spacing}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} name={name} onChange={stateInput} isRequired={true} placeholder={name} />
    </Box>
  );
};

export default InputForm;
