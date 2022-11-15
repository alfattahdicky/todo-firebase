import React, { useContext } from 'react'

export const AuthContext = React.createContext();

const AuthProvider = ({children, value}) => {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export function useAuthValue() {
  return useContext(AuthContext);
}