import { useState } from "react";

const useForm = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const reset = () => setState(initialValue);

  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return [state, handleChange, reset];
};

export default useForm;
