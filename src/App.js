import './App.css';
import {GiArtificialHive, GiFlexibleLamp} from 'react-icons/gi' ;

import {  AiOutlineLogout } from 'react-icons/ai';


import React from 'react';
import SignIn  from './component/signIn';
import ChatRoom from './component/Tchat';




import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

import {useAuthState} from 'react-firebase-hooks/auth';

import { FormControl, ThemeProvider } from 'react-bootstrap';
import  { yellow , black } from "@material-ui/core/colors"
import  Button  from "@material-ui/core/Button";
import { Box, Container, createMuiTheme, Grid, MuiThemeProvider, makeStyles, TextField, Card } from '@material-ui/core';


if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDTWBteXw0tA7hZ0OQCJmzl8q_6lcK18Jc",
    authDomain: "hive-db3b9.firebaseapp.com",
    projectId: "hive-db3b9",
    storageBucket: "hive-db3b9.appspot.com",
    messagingSenderId: "306107300911",
    appId: "1:306107300911:web:42ab214d27d522768bdada",
    measurementId: "G-H9W71X85WS"
  })

}
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles({
  root: {
    background: '#212F42',
    color: 'white',
    minHeight : '100vh' ,
    display: 'flex',
    
  },
  
});


const auth = firebase.auth();


function App() {
  const [user] = useAuthState(auth) ;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <SignIn/>  
    </Box>
  );
}


function SignOut() {
  return auth.currentUser && (
    
      <button onClick={() => auth.signOut()} className="m-2 button "><AiOutlineLogout/> Sign Out</button>
  )
}




export default App;