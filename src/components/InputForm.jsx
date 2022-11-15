import { Box, FormLabel, Input } from "@chakra-ui/react";

const InputForm = (props) => {
  const {stateInput, label, type, spacing, name} = props;
  return (
    <Box my={spacing}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} name={name} onChange={stateInput} isRequired={true} />
    </Box>
  )
}

export default InputForm