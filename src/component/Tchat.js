
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'
import React from 'react';


import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Box, Button, Grid} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {UserMenu} from './Menu'

import {useStyles} from './Theme';
import { Profile } from './Profile';

const auth = firebase.auth();
const firestore = firebase.firestore();

const ChatRoom = () => {
  const classes = useStyles()
  var profileReq = null
  
   
    return (
      <Grid item xs={12} sm={0} md={0} lg={8} direction='column' alignItems="center" justify='center' className={classes.root2}>
        <Grid item className={classes.menuBar}>
            <UserMenu/>
        </Grid>
        
        {profileReq? <Profile/> : <ChatBox/>}
       
      </Grid>
    )
}
function ChatMessage(props){
    var {text , uid, name, email} = props.msgcontent ;
    if (email){
      var nmail = email.split('@hive.bee') || undefined;
      var pseudo = nmail[0];
    }
    
    if(uid != null){
      
    }
    const messageClass = uid === auth.currentUser.uid? 'sent' : 'received';
    const messageClass2 = uid === auth.currentUser.uid? 'you' : 'theOthers';  
    return (
        <div className={` msgcontent m-0 ${messageClass}`} >
          <div className={` msgcontent ${messageClass2}`} >
            <div className="font-weight-bold font-italic">
              {name? name : pseudo } 
            </div>
            <p style={{marginBottom: '0px' , textAlign: 'center'}}>{text}</p>
          </div>
        </div>
    )
  }
function ChatBox(){
  const dummy = useRef() ;
    const messagesRef = firestore.collection("Messages")
    const query = messagesRef.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData(query, { idField: 'id'});
    const [formValue, setFormValue] = useState('');
    const classes = useStyles()
    
    
    const sendMessage = async(e) => {
        e.stopPropagation();
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
          dummy.current.scrollIntoView({behavior : 'smooth'})
        }      
        
    }
  return(
    <Grid>
      <Grid item className={classes.tchat}>
          {messages && messages.map(msg => <ChatMessage key={msg.id} msgcontent={msg}/>)}
          <Box ref={dummy}></Box>
        </Grid>
        <Grid  direction='row' item justify="center" alignItems="center" className>
          <form onSubmit={sendMessage} className={classes.inputAera}>
            <input  type="text"   placeholder="enter a message" className={classes.textField} value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
            <Button variant="primary" type="submit" className={classes.button}>
              <AiOutlineSend/>
            </Button>
          </form>
        </Grid>
    </Grid>
  )
}  



export default ChatRoom;