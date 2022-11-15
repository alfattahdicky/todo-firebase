import InputForm from "./InputForm";
import {Box, IconButton} from "@chakra-ui/react";
import {AiFillPlusCircle} from "react-icons/ai";

const InputTodo = (props) => {
  const {stateInput, addTodo} = props;
  const todo = {
    label: "",
    type: "text",
    name: "todo",
    stateInput: stateInput,
    spacing: "0"
  }
  return (
    <Box position="absolute" bottom="0" py="1rem" left="0" right="0" borderTopRadius="1rem" boxShadow="dark-lg" backdropFilter='auto' backdropBlur='10px' borderBottomRadius="1rem">
      <Box display="flex" gap="1rem" justifyContent="center" alignItems="center" w="100%">
        <InputForm {...todo}  />
        <IconButton aria-label="add todo" onClick={addTodo} variant="ghost" fontSize="2rem" icon={<AiFillPlusCircle />} />
      </Box>
    </Box>
  )
}

export default InputTodo;