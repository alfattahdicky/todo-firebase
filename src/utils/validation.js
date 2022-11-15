export const validationPassword = (state, setError) => {
  let isValid = false;
  const {password, confirmPassword} = state;

  if(password === confirmPassword) {
    if(password.length >= 6) {
      isValid = true;
      setError("");
    }else {
      setError("Password length must be greater than 6");
    }
  }else {
    isValid = false;
    setError("Confirm Password Not same");
  }

  return isValid;
}