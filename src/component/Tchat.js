
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'

import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Button } from '@material-ui/core';



const auth = firebase.auth();
const firestore = firebase.firestore();

const ChatRoom = () => {

    const dummy = useRef() ;
    const messagesRef = firestore.collection("Messages")
    const query = messagesRef.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData(query, { idField: 'id'});
    const [formValue, setFormValue] = useState('');

    
    
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
        } else {
          uid = 'queenbee'

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
      <div className="col-sm-12  p-0" style={{maxHeight : '90vh' , minHeight : '87vh'}}>
        <main className="tchatbox">
          
          {messages && messages.map(msg => <ChatMessage key={msg.id} msgcontent={msg}/>)}
          <div ref={dummy}></div>
        </main>
        <div className="row formex">
          <form onSubmit={sendMessage} className="pt-4">
            <input type="text"  placeholder="enter a message" className="formeiks ml-1" value={formValue} style={{outline : 0 }} onChange={(e) => setFormValue(e.target.value)}/>
  
            <Button type="submit" className="send ml-3" style={{outline : 0 }}>
              <AiOutlineSend/>
            </Button>
        
          </form>
        </div>
        
       
      </div>
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