import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import App from './App';
import LoginScreen from './LoginScreen';
import Register from './Register';

const firebaseConfig = {
  // Your Firebase config goes here
  apiKey: "AIzaSyC1J6DpQ9Bmo4G2TT1vAYiO6Cz1MiWexPM",
  authDomain: "login-a2799.firebaseapp.com",
  projectId: "login-a2799",
  storageBucket: "login-a2799.appspot.com",
  messagingSenderId: "685294348914",
  appId: "1:685294348914:web:3fe5df5516a1ae3ba770eb",
  measurementId: "G-LSYYZMWJPW"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/">
          <App />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
