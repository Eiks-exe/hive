import { Button, makeStyles } from "@material-ui/core";
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/firebase-auth'

import {  AiOutlineLogout } from 'react-icons/ai';

const auth = firebase.auth();

const useStyles = makeStyles({
    button :{
        background : 'linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)',
        margin :'1rem',
        '&:hover' : {
          background : 'linear-gradient(45deg, #324764 60%, #939FA2 90%)',
          color:'white',
        },
        
      }
})
export const  SignOut = () => {
    const classes = useStyles();
    return auth.currentUser && (
        <Button varient="" onClick={() => auth.signOut()} className={classes.button}> <AiOutlineLogout/>  Sign Out</Button>
    )
  }

