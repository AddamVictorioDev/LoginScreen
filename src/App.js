import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import LoginScreen from './LoginScreen';
import Register from './Register';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async ()=> {
    try {
    await firebase.auth().signOut();
    } catch (error) {
    console.error(error);
    }
    };
    
    
    return (
    <>
    {user ? (
    <>
    <h1>Welcome, {user.email}!</h1>
    <button onClick={handleLogout}>Log Out</button>
    </>
    ) : (
      <>
  <Register/>
  </>
    )}
    </>
    );
    };
    
    export default App;