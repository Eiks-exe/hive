import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'
import { Button, Card, CardContent, Grid, makeStyles, TextField, Typography, Divider, List, ListItem } from '@material-ui/core';
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

const SignInStyle = makeStyles((theme) =>({
  root:{
    display: 'flex',
    alignItems:'center',
    flexDirection: 'column',
    width: '100%',
    background: 'linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)',
    fontFamily: 'Russo One, sans-serif',
  },
  content :{
    width: '100%',
    padding: 0,
  },
  textCenter: {
    margin:'auto',
  },
  button : {
    background: 'linear-gradient(45deg, #324764 60%, #939FA2 90%)' ,
    color: 'white',
    '&:focus': {
      outline: 'none',
    },
  },
  form : {
    background: '#f0d050',
  }

}));

const SignIn = ()=> {
  const classes = SignInStyle()
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const signInWithEmail = async(e) => {
    e.stopPropagation();
    e.preventDefault();

    auth.signInWithEmailAndPassword(`${username}@hive.bee`, password)
        .then((user)=>{

        })
        .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      })
    setPassword('');
  }
  
  const SignUp = async(e)=> {
    e.stopPropagation();
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(`${username}@hive.bee`, password)
      .then((user)=>{
        
      })
      .catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
    })
    setPassword('');
   }
  
    return (
      <Grid container justify='center'>
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4} >
        <Card className={classes.root}>
          <CardContent className={classes.content}>
          <List className={classes.content}>
              <ListItem>
              <Typography component="h1" variant="h2" className={classes.textCenter}>
                Hive
                </Typography >
              </ListItem>
              <ListItem>
              <Typography component="h2" variant="subtitle1" className={classes.textCenter}>
                login
                </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <form onSubmit={signInWithEmail} style={{ width: '100%' }}>
                <Grid container direction="column" className={classes.details} spacing={2}>
                  <Grid item xs={12}>
                    <TextField name="username" fullWidth variant="outlined" className={classes.form} value={username} onChange={(e) => setUsername(e.target.value)}   />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField name="password" fullWidth type="password" variant="outlined"  className={classes.form} value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <Button onClick={signInWithEmail} className={classes.button}>
                      Sign in
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button onClick={SignUp} className={classes.button}>
                      sign up 
                    </Button>
                  </Grid>

                </Grid>
              </form>
            </ListItem>
            </List>
          </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
}


export default SignIn ;