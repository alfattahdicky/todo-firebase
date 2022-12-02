import { Stack, useToast } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState, useRef, memo } from "react";
import InputTodo from "../components/InputTodo";
import WrapperTodo from "../components/WrapperTodo";
import { useAuthValue } from "../context/AuthProvider";
import useForm from "../hooks/useForm";
import { uid } from "uid";
import HeaderTodo from "../components/HeaderTodo";
import { BASEURL, database, updateDatabase, todoRef } from "../data/firebase";
import { child, onValue, ref, remove, set, update } from "firebase/database";
import ListTodo from "../components/ListTodo";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdate } from "../hooks/useUpdate";
import { getAuth, signOut } from "firebase/auth";

const Home = () => {
  const [datas, setDatas] = useState({});
  const scrollRef = useRef(null);
  const [state, setState, reset] = useForm({
    id: uid(16),
    todo: "",
    edit: false,
    complete: false,
  });
  const toast = useToast();
  const { userId } = useParams();
  const { edit, changeTodo, editTodo, updateTodo } = useUpdate(toast, userId);
  const user = useAuthValue();
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    const todoRef = ref(database, `users/${userId}`);
    onValue(todoRef, (snapshot) => {
      setDatas(snapshot.val()["todo"]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.style.height = "25rem";
    scrollRef.current.style.paddingInline = "2rem";
    scrollRef.current.style.overflowY = "scroll";
    if (Object.keys(datas).length !== 0) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const addTodo = () => {
    set(todoRef(`${BASEURL(userId)}/${uid(8)}`), state)
      .then(() => {
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

    const completeTodo = {
      complete: !items.complete,
      id: items.id,
      edit: items.edit,
      todo: items.todo,
    };

    const updateCompleteTodo = updateDatabase(
      `${BASEURL(userId)}/${todoId}`,
      completeTodo
    );

    updateCompleteTodo.then(() => {
      console.log("Berhasil di checklist");
    });
  };

  const deleteTodo = (task) => {
    const { todoId } = task;
    remove(ref(database, `users/${userId}/todo/${todoId}`)).then(() => {
      toast({
        position: "top-right",
        title: "Task Deleted",
        status: "error",
        duration: 500,
      });
    });
  };

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast({
          position: "top-right",
          title: "You has been out",
          status: 'success',
          duration: 500,
        });
        navigate('/');
        JSON.stringify(localStorage.setItem("auth", {}));
      })
      .catch((error) => {
        toast({
          position: "top-right",
          title: "Error Log Out",
          status: "error",
          duration: 500
        })
      });
  };

  return (
    <WrapperTodo bg={"/meteor.svg"} handleLogOut={handleLogOut}>
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

export default memo(Home);
