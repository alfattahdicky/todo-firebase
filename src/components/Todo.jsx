import {
  Editable,
  EditablePreview,
  EditableInput,
  Input,
  Flex,
  Button,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiFillDelete,
} from "react-icons/ai";

const Todo = ({
  editTodo,
  submitTodo,
  valueTodo,
  complete,
  handleChangeTodo,
  handleCompleteTodo,
  handleDeleteTodo,
}) => {
  return (
    <Flex align="center" justify="space-between">
      <Editable
        value={valueTodo}
        isPreviewFocusable={true}
        onChange={handleChangeTodo}
        onEdit={editTodo}
        onSubmit={submitTodo}
        fontSize="1.2rem"
      >
        <EditablePreview textDecoration={complete ? "line-through" : "none"} />
        <Input as={EditableInput} w="100%" variant="flushed" />
      </Editable>
      <ButtonGroup>
        <IconButton
          fontSize="1.6rem"
          aria-label="not complete"
          variant="ghost"
          icon={<AiOutlineCheckCircle />}
          _active={{ background: "none" }}
          _hover={{ background: "none", transform: "scale(0.9)" }}
          onClick={handleCompleteTodo}
        />
        <IconButton
          variant="ghost"
          aria-label="delete todo"
          fontSize="1.6rem"
          icon={<AiFillDelete />}
          _active={{ background: "none" }}
          _hover={{ background: "none", transform: "scale(0.9)" }}
          onClick={handleDeleteTodo}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default Todo;
