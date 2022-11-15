import React from 'react'
import { useAuthValue } from '../context/AuthProvider'

const Home = () => {
  const user = useAuthValue();
  console.log(user);
  return (
    <div>Home </div>
  )
}

export default Home