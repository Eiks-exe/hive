import { Avatar, Grid, Input, TextField, Typography } from '@material-ui/core';
import {useStyles} from './Theme';
import EditIcon from '@material-ui/icons/Edit';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'
import { useState } from 'react';
import { useForm } from "react-hook-form";

  export const Profile = () => {
      const auth = firebase.auth()
      const classes = useStyles();
      var user = firebase.auth().currentUser;
      const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
                  user.updateProfile({displayName : data.pseudo});
                }
      return(
        <Grid className={classes.tchat}>
          <Grid  className={classes.profile}>
            <Avatar className={classes.avatarProfile} alt="" src="https://cdn.discordapp.com/attachments/444928915279052830/793260656555982868/unknown.png"/>
            <Grid>
              <Typography variant='h4' color="black">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input name="pseudo" defaultValue={user.email.split('@hive.bee')[0]} label="Standard" inputRef={register} />
                  <EditIcon onClick={handleSubmit(onSubmit)}/>
                </form>
              </Typography>
            </Grid>
            <Grid>
            <TextField
              id="outlined-multiline-static"
              label="humor"
              multiline
              rows={4}
              defaultValue="say something nice !"
              variant="filled"
            />
            </Grid>
          </Grid>
        </Grid>
      )
  };