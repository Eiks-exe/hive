
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Box, Button, Grid, makeStyles, TextField } from '@material-ui/core';

const useStyle = makeStyles({
  root:{

  },
  tchat:{
    padding: '10px',
    paddingBottom: '40px',
    minHeight:'87vh',
    height:'100px',
    overflowY : 'scroll',
    display:'flex',
    flexDirection:'column',
    background: 'linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)',
    
    '&::-webkit-scrollbar': {
      width: '0.5em'
    },
    '&::-webkit-scrollbar-track': {
      background:'black',
    },
    '&::-webkit-scrollbar-thumb': {
      background:'yellow',
    },
  },
  inputAera:{
    background:'black',
    display:'flex',
    flexDirection:'column',
    
  },
  textField:{
    background:'pink',
    color:'black',
  },
  button : {

  }
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const ChatRoom = () => {

    const dummy = useRef() ;
    const messagesRef = firestore.collection("Messages")
    const query = messagesRef.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData(query, { idField: 'id'});
    const [formValue, setFormValue] = useState('');
    const classes = useStyle()
    
    
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
  
   
    return (
      <Grid item xs={12} sm={0} md={0} lg={8} direction='column' justify='center'>
        <Grid item className={classes.tchat}>
          {messages && messages.map(msg => <ChatMessage key={msg.id} msgcontent={msg}/>)}
          <Box ref={dummy}></Box>
        </Grid>
        <Grid className>
          <form lg={12} onSubmit={sendMessage} className={classes.inputAera}>
            <TextField type="text"  placeholder="enter a message" className={classes.textField} value={formValue} style={{outline : 0 }} onChange={(e) => setFormValue(e.target.value)}/>
  
            <Button type="submit" className style={{outline : 0 }}>
              <AiOutlineSend/>
            </Button>
        
          </form>
        </Grid>
        
       
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

export default ChatRoom