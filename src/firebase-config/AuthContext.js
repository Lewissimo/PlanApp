import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
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
    const unsubscribe = auth.onAuthStateChanged(Currentuser => {
      console.log(Currentuser);
      setCurrentUser(Currentuser);
    },[]);

    return ()=>{console.log('element odmontowano')};
  },[]);
  
  // register function
  const sing_up = async (email, password, reapeatPasword, firstName, lastName) => {
  
  
  if (password === reapeatPasword){

    

    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      try {await sendEmailVerification(user);
      await updateProfile(user,{
        displayName: 'asdasdgis',
        photoURL: null
      })
      }
      catch (err){
        console.log(err);
      }
      // user is signed out because I dont want to sign in user automaticly
      await signOut(auth);
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
      // await auth.setPersistence(browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      await localStorage.setItem('isLogged', 'true');
      const currentUser = auth.currentUser;
      if(!currentUser.emailVerified) return -1;
      
      return 0;
    }
    catch(err){
      if (err.code === 'auth/network-request-failed') return 2;
      console.log(err);
      return 1;
    }
  }
  

  const logOut = () => {
    signOut(auth);
    localStorage.setItem('isLogged', 'false');

  }

  const getCurrentUser = ()=>{
    return auth.currentUser;
  }

  const authFunctions = {
    'singUp': sing_up,
    'singIn': sing_In,
    'logOut': logOut,
    'getUser': getCurrentUser,
    'currentUser': user,

  };
  return (
    <AuthContext.Provider value={authFunctions}>
      {children}
    </AuthContext.Provider>
  )
}

export default MyRegLogProvider