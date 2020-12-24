import './App.css';
import {  AiOutlineLogout } from 'react-icons/ai';

import React from 'react';
import SignIn  from './component/signIn';
import ChatRoom from './component/Tchat';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

import {useAuthState} from 'react-firebase-hooks/auth';

import  Button  from "@material-ui/core/Button";
import { Grid, makeStyles, Box} from '@material-ui/core';



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

const useStyles = makeStyles({
  body:{
    minHeight:'100vh',
    background: '#212F42',
  },
  root: {
    background: '#212F42',
    color: 'white',
    minHeight : '87vh' ,
    display: 'flex',
    flexDirection :"column",
    justifyContent:'center',
  },
  header: {
    background : '#1E1E18',
  },
  button :{
    background : 'linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)',
    margin :'1rem',
    '&:hover' : {
      background : 'linear-gradient(45deg, #324764 60%, #939FA2 90%)',
      color:'white',
    },
    
  }
  
});


const auth = firebase.auth();


function App() {
  var [user] = useAuthState(auth) ;
  const classes = useStyles();
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);
  
  return (
    <Box className={classes.body}>
      <Grid boxShadow={3}  className={classes.header}>
        <SignOut/>
      </Grid>
      <Box className={classes.root}>
        <Grid container justify="center">
          {user? <ChatRoom/> : <SignIn/>}
          {urlParam.has('test') && <Visit/>}
        </Grid>
      </Box>
    </Box>
    
  );
}

function SignOut() {
  const classes = useStyles();
  return auth.currentUser && (
      <Button varient="" onClick={() => auth.signOut()} className={classes.button}><AiOutlineLogout/>  Sign Out</Button>
  )
}

function Visit(){
  var [user] = useAuthState(auth) ;
  const Tech = async ()=>{
    auth.signInAnonymously();
  } 
  return(
    <Box>
      {user? null : <Button onClick={Tech}>test</Button> }
    </Box>
  )
}


export default App;