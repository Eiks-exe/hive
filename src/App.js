import logo from './logo.svg';
import './App.css';
import {GiArtificialHive, GiPschentDoubleCrown} from 'react-icons/gi' ;
import { Col, Container, FormGroup, Row, Form, FormControl} from 'react-bootstrap';
import { AiOutlineLogin, AiOutlineLogout, AiOutlineSend } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";

import React from 'react';
import SignIn  from './component/signIn';
import ChatRoom from './component/Tchat';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useState } from 'react';

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

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth) ;
  
  return (
    <div className="App">
      <header className="header d-flex justify-content-between flex-row shadow-lg">
        <SignOut />
        
        <h1 className="text-white">Hive <small className="text-muted version">(v.1)</small> </h1>
        <h1  className="text-white"><GiArtificialHive/></h1>
      </header>
      
      <div className="h-100" style={{}} >
            {user ? <ChatRoom/> : <SignIn/>}
      </div>
      <footer>
        
      </footer>
    </div>
  );
}


function SignOut() {
  return auth.currentUser && (
    
      <button onClick={() => auth.signOut()} className="m-2 button "><AiOutlineLogout/> Sign Out</button>
  )
}




export default App;