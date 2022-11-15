import { Editable, EditablePreview, EditableInput, Input, Flex, Button, ButtonGroup, IconButton} from "@chakra-ui/react";
import {AiFillCheckCircle, AiOutlineCheckCircle, AiFillDelete} from "react-icons/ai"

const Todo = () => {

  return (
    <Flex align="center" justify="space-between">
      <Editable defaultValue="test" isPreviewFocusable={true} onEdit={() => console.log("Hello")} onSubmit={(value) => console.log(value)} fontSize="1.2rem">
        <EditablePreview />
        <Input as={EditableInput} w="100%" variant='flushed'/>
      </Editable>
      <ButtonGroup >
        <IconButton fontSize="1.6rem" aria-label="not complete" variant="ghost" icon={<AiOutlineCheckCircle />} 
        _hover={{background: "none", transform: "scale(0.9)"}} />
        <IconButton variant="ghost" aria-label="delete todo" fontSize="1.6rem" icon={<AiFillDelete />} _hover={{background: "none", transform: "scale(0.9)"}}   />
      </ButtonGroup>
    </Flex>
  )
}

export default Todo