import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'
import { Grid, makeStyles } from '@material-ui/core';
import {useStyles} from './Theme';
const auth = firebase.auth();



  export const Profile = () => {
      const classes = useStyles();
      return(
        <Grid className={classes.tchat}>
            wassup
        </Grid>
      )
  };