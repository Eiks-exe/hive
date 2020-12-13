import logo from './logo.svg';
import './App.css';
import {GiArtificialHive, GiPschentDoubleCrown} from 'react-icons/gi' ;
import { Col, Container, FormGroup, Row, Form, FormControl} from 'react-bootstrap';
import { AiOutlineLogin, AiOutlineLogout, AiOutlineSend } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";


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

        <h1 className="text-white">Hive</h1>
        <h1  className="text-white"><GiArtificialHive/></h1>
      </header>
      
      <div className="" >
            {user ? <ChatRoom/> : <SignIn/>}
      </div>
      <footer>
        
      </footer>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }
  const signInWithEmail = () => {
    const emailProvider = new firebase.auth.EmailAuthProvider();
    auth.signInWithEmailAndPassword(emailProvider)
  }
  return(
    <Container className="col-sm-6 signIn">
      <div className="rounded bg-dark shadow-lg">
        <Col className="col">
          <div className="row justify-content-center text-white rounded-top" style={{backgroundColor:'black'}}>
            
             
            
            <h1 className=""> log in </h1>
          </div>
               
          <Col className="d-flex justify-content-center m-0 p-5">
            <button onClick={signInWithGoogle} className="btn btn-primary ml-2 mb-2 text-center"><FcGoogle/> Sign in with Google</button>
          </Col>

        </Col>

      </div>
    </Container>
    
    
    
  )
}

function SignOut() {
  return auth.currentUser && (
    
      <button onClick={() => auth.signOut()} className="m-2 btn btn-primary"><AiOutlineLogout/> Sign Out</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection("Messages")
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault()
      
      const user = auth.currentUser ;
      var uid, photoURL, name, email;
      if (user != null) {
        uid = user.uid
        photoURL = user.photoURL
        name = user.displayName
        email= user.email
      }
      if (formValue.trim() !== '' ){
        await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL,
          name,
          email
        });
        setFormValue('');
      }      
      
  }
  

  
  return (
    <div className="col-sm-12 m-0">
      <div className="tchatbox">
        {messages && messages.map(msg => <ChatMessage key={msg.id} msgcontent={msg}/>)}
      </div>
      <div className="row formex">
        <form onSubmit={sendMessage} className="col-lg-12">
          <input type="text"  placeholder="enter a message" className="formeiks border border-secondary h-75" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>

          <button type="submit" placeholder="send" className=" send">
            <AiOutlineSend/>
          </button>
      
        </form>
      </div>
      
     
    </div>
  )
}
function ChatMessage(props){
  const {text , uid, photoURL, name} = props.msgcontent
  const messageClass = uid === auth.currentUser.uid? 'sent' : 'received';
  const messageClass2 = uid === auth.currentUser.uid? 'you' : 'theOthers';  
  

  



  return (
      <div className={` msgcontent m-0 ${messageClass}`} >
        <div className={` msgcontent ${messageClass2}`} >
          <div className="font-weight-bold font-italic">
            {name} 
          </div>
          
          <p style={{marginBottom: '0px' , textAlign: 'center'}}>{text}</p>
        </div>
      </div>
  )
}

export default App;