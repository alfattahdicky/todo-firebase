import { Stack, useToast } from '@chakra-ui/react';
import React from 'react'
import InputTodo from '../components/InputTodo';
import WrapperTodo from '../components/WrapperTodo';
import { useAuthValue } from '../context/AuthProvider'
import useForm from "../hooks/useForm";
import { uid } from 'uid';
import HeaderTodo from '../components/HeaderTodo';
import Todo from '../components/Todo';
import { database } from '../data/firebase';
import { ref, set } from 'firebase/database';

const Home = () => {
  const user = useAuthValue();
  // console.log(user);
  const [state, setState, reset] = useForm({id: uid(16), todo: "", edit: false, complete: false});
  const toast = useToast()
  
  const addTodo = async () => {
    // console.log(state);
    set(ref(database, `users/${user.uid}/todo/${uid(8)}`), state)
      .then(() => {
        toast({
          position: "top-right",
          title: "Task has been created",
          status: "success",
          duration: 500
        })
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return (
    <WrapperTodo bg={"/meteor.svg"}> 
      <HeaderTodo />
      <Stack mx="2rem" my="1.2rem">
      </Stack>
      <InputTodo stateInput={setState} addTodo={addTodo} />
    </WrapperTodo>
  )
}

export default Home