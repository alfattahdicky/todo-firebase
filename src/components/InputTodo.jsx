import InputForm from "./InputForm";
import {Box, IconButton} from "@chakra-ui/react";
import {AiFillPlusCircle} from "react-icons/ai";
import { useEffect, useState } from "react";

const todo = {
  label: "",
  type: "text",
  name: "todo",
  spacing: "0"
}

const InputTodo = (props) => {
  const {stateInput, addTodo} = props;

  return (
    <Box position="absolute" bottom="0" py="1rem" left="0" right="0" borderTopRadius="1rem" boxShadow="dark-lg" backdropFilter='auto' backdropBlur='10px' borderBottomRadius="1rem">
      <Box display="flex" gap="1rem" justifyContent="center" alignItems="center" w="100%">
        <InputForm {...todo} stateInput={stateInput}  />
        <IconButton aria-label="add todo" onClick={addTodo} variant="ghost" fontSize="2rem" icon={<AiFillPlusCircle />} />
      </Box>
    </Box>
  )
}

export default InputTodo;