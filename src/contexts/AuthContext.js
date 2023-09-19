import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../firebase"; 
import axios from 'axios';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    const result = await auth.createUserWithEmailAndPassword(email, password);

    await axios({
      method: 'post',
      url: 'http://localhost:3001/calend/initialiseUser',
      data: {
        userID: result['user']['uid'],
        email: result['user']['email']
      }
    })

    return
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    logout,
    signup,
    resetPassword
  }

  return (
    <AuthContext.Provider value = {value}>
      { !loading && children }
    </AuthContext.Provider>
  )
}