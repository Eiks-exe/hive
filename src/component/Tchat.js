
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'
import React, { useEffect } from 'react';


import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Box, Button, Grid, Menu, MenuItem, MenuList, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {useStyles} from './Theme';
import { Profile } from './Profile';

const auth = firebase.auth();
const firestore = firebase.firestore();

const ChatRoom = () => {
  const classes = useStyles()
  
  const [openProfile,CloseProfile] = useState(null)
  
  function UserMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
      
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const StyledMenu = withStyles({
        paper: {
         
          backgroundColor: "rgb(58,58,58)"
        }
      })((props) => (
        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          {...props}
        />
      ));
  
    return (
      <Box>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.buttonMenu}>
          <MenuIcon className={classes.icon}/>
        </Button>
        <StyledMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          
        >
        <MenuList className={classes.UserMenu}>
            
                    <MenuItem onClick={()=>CloseProfile(true)}>profile</MenuItem>
                    
                   
                
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={() => auth.signOut()} className={classes.menu}>Logout</MenuItem>
        </MenuList>
        </StyledMenu>
      </Box>
    );
  }
    
  return (
      <Grid item xs={12} sm={0} md={0} lg={8} direction='column' alignItems="center" justify='center' className={classes.root2}>
        <Grid item className={classes.menuBar}>
            <UserMenu/>
            {openProfile && <Button className={classes.buttonProf} onClick={()=>CloseProfile(null)}> back </Button> }
            
            
        </Grid>
        
        {openProfile? <Profile/> : <ChatBox/>}

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
    useEffect(()=>{
      dummy.current.scrollIntoView({behavior:'smooth'});
    }, [messages])
    
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