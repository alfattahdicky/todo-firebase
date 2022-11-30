import { Stack, useToast } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState, useRef } from "react";
import InputTodo from "../components/InputTodo";
import WrapperTodo from "../components/WrapperTodo";
import { useAuthValue } from "../context/AuthProvider";
import useForm from "../hooks/useForm";
import { uid } from "uid";
import HeaderTodo from "../components/HeaderTodo";
import { database } from "../data/firebase";
import { child, onValue, ref, remove, set, update } from "firebase/database";
import ListTodo from "../components/ListTodo";
import { useParams } from "react-router-dom";

const Home = () => {
  const [datas, setDatas] = useState({});
  const scrollRef = useRef(null);
  const [state, setState, reset] = useForm({
    id: uid(16),
    todo: "",
    edit: false,
    complete: false,
  });
  const [edit, setEdit] = useState("");
  const { userId } = useParams();
  // console.log(user);
  const user = useAuthValue();
  const toast = useToast();

  useEffect(() => {
    const todoRef = ref(database, `users/${userId}`);
    onValue(todoRef, (snapshot) => {
      // console.log(snapshot.val()["todo"]);
      setDatas(snapshot.val()["todo"]);
    });
  }, []);

  useEffect(() => {
    // console.log(scrollRef)
    scrollRef.current.style.height = "25rem";
    scrollRef.current.style.paddingInline = "2rem";
    scrollRef.current.style.overflowY = "scroll";
    if (Object.keys(datas).length !== 0) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const addTodo = () => {
    // console.log(state);
    set(ref(database, `users/${userId}/todo/${uid(8)}`), state)
      .then(() => {
        // console.log("Success", state);
        toast({
          position: "top-right",
          title: "Task has been created",
          status: "success",
          duration: 500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const completeTodo = (task) => {
    const { todoId, ...items } = task;
    // console.log(items);
    // setComplete(!complete);
    const updateTodo = {
      complete: !items.complete,
      id: items.id,
      edit: items.edit,
      todo: items.todo,
    };
    // console.log(updateTodo);
    update(ref(database, `users/${userId}/todo/${todoId}`), updateTodo).then(
      () => {
        console.log("berhasil dichecklist");
      }
    );
  };

  const deleteTodo = (task) => {
    const { todoId } = task;
    remove(ref(database, `users/${userId}/todo/${todoId}`)).then(() => {
      toast({
        position: "top-right",
        title: "Task Deleted",
        status: 'error',
        duration: 500,
      });
    });
  };

  const updateTodo = (task, value) => {
    const { todoId, ...items } = task;
    const updateTodo = {
      complete: items.complete,
      id: items.id,
      edit: !items.edit,
      todo: value === "" ? items.todo : value,
    };
    console.log(updateTodo);
    update(ref(database, `users/${userId}/todo/${todoId}`), updateTodo).then(
      () => {
        toast({
          position: "top-right",
          title: "Task Updated",
          status: 'success',
          duration: 500,
        });
      }
    );
  };

  const changeTodo = (task, value) => {
    setEdit(value);
  }

  const editTodo = (task) => {
    const { todoId, ...items } = task;
    const updateTodo = {
      complete: items.complete,
      id: items.id,
      edit: !items.edit,
      todo: items.todo,
    };
    // console.log(updateTodo);
    update(ref(database, `users/${userId}/todo/${todoId}`), updateTodo).then(
      () => {
        console.log("sedang diedit");
      }
    );
    setEdit(items.todo);
  }

  return (
    <WrapperTodo bg={"/meteor.svg"}>
      <HeaderTodo email={user} />
      <Stack mt="1rem" ref={scrollRef}>
        <ListTodo
          data={datas}
          handleComplete={completeTodo}
          handleDelete={deleteTodo}
          updateTodo={updateTodo}
          changeTodo={changeTodo}
          editTodo={editTodo}
          editInput={edit}
        />
      </Stack>
      <InputTodo stateInput={setState} addTodo={addTodo} />
    </WrapperTodo>
  );
};

export default Home;
