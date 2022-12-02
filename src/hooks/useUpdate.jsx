import { useState } from "react";
import { updateDatabase, BASEURL } from "../data/firebase";

export const useUpdate = (toast, userId) => {
  const [edit, setEdit] = useState("");

  const changeTodo = (value) => {
    setEdit(value);
  };

  const editTodo = (task) => {
    const { todoId, ...items } = task;
    const editTodo = {
      complete: items.complete,
      id: items.id,
      edit: !items.edit,
      todo: items.todo,
    };
    const update = updateDatabase(`${BASEURL(userId)}/${todoId}`, editTodo);

    update
      .then(() => {
        console.log("berhasil diedit");
      })
      .catch((error) => console.log(error));
    setEdit(items.todo);
  };

  const updateTodo = (task, value) => {
    const { todoId, ...items } = task;
    const updateTodo = {
      complete: items.complete,
      id: items.id,
      edit: !items.edit,
      todo: value === "" ? items.todo : value,
    };
    const update = updateDatabase(`${BASEURL(userId)}/${todoId}`, updateTodo);
    update
      .then(() => {
        toast({
          position: "top-right",
          title: "Task Updated",
          status: "success",
          duration: 500,
        });
      })
      .catch((error) => {
        toast({
          position: "top-right",
          title: "Task Failed Update",
          status: "failed",
          duration: 500,
        });
      });
  };

  return { edit, changeTodo, editTodo, updateTodo };
};
