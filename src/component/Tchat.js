
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import MenuX from './Menu'
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
const useStyle = makeStyles({
  root:{
    margin:'100px',
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
  menuBar:{
    height:"3.5rem",
    background:'black',
    borderTopLeftRadius:"15px",
    borderTopRightRadius:"15px",
    color:'white',
  },
  inputAera:{
    background:'rgb(58, 58, 58)',
    display:"flex",
    borderBottomLeftRadius:"15px",
    borderBottomRightRadius:"15px",
    paddingLeft:"10px",
  },
  textField:{
    background:'rgb(58, 58, 58)',
    color:'white',
    display:"flex",
    width:"90%",
    height:"3.5rem",
    border:"none",
    borderBottomLeftRadius:"15px",
    '&:hover':{
      outline:'none',
      
    },
    '&:focus':{
      outline:'none',
    }

  },
  button : {
    width:'10%',
    color :'white',
    fontSize :'20px',
    borderRadius:'0',
    borderBottomRightRadius:"15px",
    '&:focus':{
      outline:'none',
  }
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
      <Grid item xs={12} sm={0} md={0} lg={8} direction='column' alignItems="center" justify='center' className={classes.root2}>
        <Grid item className={classes.menuBar}>
          <Grid>
            <MenuX/>
          </Grid>
          <Grid>
            <AccountBoxRoundedIcon/>
          </Grid>
        </Grid>
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
export default ChatRoom;