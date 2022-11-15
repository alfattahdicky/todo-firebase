import { useState } from 'react'

const useForm = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const reset = () => setState(initialValue);

  return [
    state, 
    e => {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    },
    reset
  ]

}

export default useForm