import React, { createContext } from 'react'
import { useContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
const AuthContext = createContext();

export UseAuth = () =>{
  return useContext(AuthContext);
}

const AuthContext = () => {
  const sing_up = (email, password) => {
    createUserWithEmailAndPassword(email, password);
  }

 
  return (
    <>

    </>
  )
}

export default AuthContext
