import { Box, Text } from "@chakra-ui/react";
import {
  memo,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useLayoutEffect,
  useState,
} from "react";
import Todo from "./Todo";

const ListTodo = ({
  data,
  handleComplete,
  handleDelete,
  updateTodo,
  changeTodo,
  editTodo,
  editInput
}) => {
  const [task, setTask] = useState([]);

  const mapData = useMemo(() => {
    return Object.keys(data).map((key) => {
      return { todoId: key, ...data[key] };
    })
  }, [data]);

  useEffect(() => {
    setTask(mapData);
  }, [mapData]);

  return (
    <Box>
      {task.length === 0 ? (
        <Text>No Todo</Text>
      ) : (
        task.map((element, index) => {
          const { todo, todoId, id, complete, edit } = element;
          return (
            <Todo
              valueTodo={edit ? editInput : todo}
              key={index}
              handleCompleteTodo={() => handleComplete(element)}
              handleDeleteTodo={() => handleDelete(element)}
              submitTodo={(value) => updateTodo(element, value)}
              handleChangeTodo={(value) => changeTodo(value)}
              editTodo={() => editTodo(element)}
              complete={complete}
            />
          );
        })
      )}
    </Box>
  );
};

export default ListTodo;
