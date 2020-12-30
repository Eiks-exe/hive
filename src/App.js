import './App.css';

import React from 'react';
import SignIn  from './component/signIn';
import ChatRoom from './component/Tchat';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

import {useAuthState} from 'react-firebase-hooks/auth';

import  Button  from "@material-ui/core/Button";
import { Grid, makeStyles, Box} from '@material-ui/core';
import * as dotenv from 'dotenv';
dotenv.config();

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTHDOM,
    projectId: process.env.FB_PROJECTID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_SENDERID,
    appId: process.env.FB_APPID,
    measurementId: process.env.FB_MEASUREMENTID
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
  },
  root2:{
    display:'flex',
    marginTop:'1.5rem'
  },

  header: {
    background : '#1E1E18',
  },
  
  
});


const auth = firebase.auth();


function App() {
  var [user] = useAuthState(auth) ;
  const classes = useStyles();
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);
  
  return (
    <Box className={classes.body}>
      <Box className={classes.root}>
        <Grid container lg={12} justify="center" alignItems="center" className={classes.root2}>
          {user? <ChatRoom/> : <SignIn/>}
          
          {urlParam.has('test') && <Visit/>}
        </Grid>
      </Box>
    </Box>
    
  );
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