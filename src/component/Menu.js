import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'
const useStyles = makeStyles({
    button :{
        background : 'black',
        borderRadius:'0',
        borderTopLeftRadius:'15px',
        height:'3.5rem',
        color:'white',
        '&:hover' : {
          background : 'rgb(58, 58, 58)',
          color:'rgb(58, 58, 58)',
        },
        '&:focus':{
            outline:'none',
        }
        
      },
    menu:{
        background:'linear-gradient(45deg, #324764 60%, #939FA2 90%)',
        color:'yellow',
        height:'50px',
        display:'flex',
        margin:'0px'
    }
})
const auth = firebase.auth();

export default function SimpleMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.button}>
          <MenuIcon/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={() => auth.signOut()} className={classes.menu}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }