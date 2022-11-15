import { Stack } from '@chakra-ui/react';
import React from 'react'
import InputTodo from '../components/InputTodo';
import WrapperTodo from '../components/WrapperTodo';
import { useAuthValue } from '../context/AuthProvider'
import useForm from "../hooks/useForm";
import { uid } from 'uid';
import HeaderTodo from '../components/HeaderTodo';
import Todo from '../components/Todo';

const Home = () => {
  const user = useAuthValue();
  // console.log(user);
  const [state, setState, reset] = useForm({id: uid(16), todo: ""});

  const addTodo = () => {
    console.log(state);
    reset();
  }

  return (
    <WrapperTodo bg={"/meteor.svg"}> 
      <HeaderTodo />
      <Stack mx="2rem" my="1.2rem">
        <Todo  />
        <Todo  />
      </Stack>
      <InputTodo stateInput={setState} addTodo={addTodo} />
    </WrapperTodo>
  )
}

export default Home