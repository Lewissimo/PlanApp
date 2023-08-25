import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import {auth} from './firebase';

//Creating context of auth
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}


// creating Auth context and passing a children argument to function. This agrument reprezents all children
// of component which will be able to use this context
const MyRegLogProvider = ({ children }) => {
  

  // Providing posibility to check if user is logged and to use user information included to user obcject
  const [user, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  
  // register function
  const sing_up = async (email, password, reapeatPasword, firstName, lastName) => {
  
  
  if (password === reapeatPasword){

    

    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      try {await sendSignInLinkToEmail(auth, auth.currentUser.email, {
        url: 'http://localhost:3000/',
        handleCodeInApp: true,
      });
      await updateProfile(user,{
        displayName: 'asdasdgis',
        photoURL: null
      })
      }
      catch (err){
        console.log(err);
      }
      // user is signed out because I dont want to sign in user automaticly
      // await signOut;
      return 0;
    
    }
    // Handling errors
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
  
  // Loggin function
  const sing_In = async (email, password) => {
    try{
      // sign in
      await signInWithEmailAndPassword(auth, email, password);

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