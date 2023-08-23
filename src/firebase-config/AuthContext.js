import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {auth} from './firebase';


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

const MyRegLogProvider = ({ children }) => {
  
  const [user, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  
  
  const sing_up = async (email, password, reapeatPasword) => {
  if (password === reapeatPasword){

    try{
      await createUserWithEmailAndPassword(auth, email, password);
      try {await sendSignInLinkToEmail(auth, auth.currentUser.email, {
        url: 'http://localhost:3000/',
        handleCodeInApp: true,
      });
      }
      catch (err){
        console.log(err);
      }
      await signOut;
      return 0;
    
    }
    catch(err){
      switch (err.code) {
        case 'auth/email-already-in-use':
          return 2;
        case 'auth/weak-password':
          return 3;
        default:
          return 4;
      }
    }
  }
  else{
    return 1;
  }
    
  }
  
  const sing_In = async (email, password) => {
    try{
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if(!user.emailVerified) return -1;
      return 0;
    }
    catch(err){
      if (err.code === 'auth/network-request-failed') return 2;

      return 1;
    }
  }
  
  const authFunctions = {
    'singUp': sing_up,
    'singIn': sing_In,
    'currentUser': user
  };
  return (
    <AuthContext.Provider value={authFunctions}>
      {children}
    </AuthContext.Provider>
  )
}

export default MyRegLogProvider