import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Card, CardActionArea, CardContent, CardMedia, Drawer, Grid, makeStyles, MenuList, TextField, Typography, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Profile} from './Profile';

import clsx from 'clsx';
import {useStyles} from './Theme'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth'
import EditIcon from '@material-ui/icons/Edit';


const auth = firebase.auth();

export function UserMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    }); 
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        
      >
        <Grid container className={classes.Drawer}>
            <Card className={classes.cardRoot}>
                    <CardContent className={classes.profilePic} >
                        <img 
                            src="https://cdn.discordapp.com/attachments/444928915279052830/793260656555982868/unknown.png" 
                            alt=""
                            width="225"
                            height="200"
                        />
                    </CardContent>
                    <CardContent justify="space-around">
                        <Typography variant="h5">
                           
                                {auth.currentUser.email.split('@hive.bee')[0]} <EditIcon/>
                           
                        </Typography>
                        <Typography variant="h5">
                           
                                
                           
                        </Typography>
                    </CardContent>
                    <CardContent>
                    <Button
                        className={classes.buttonProf}
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                    >
                        leave
                    </Button>
                    </CardContent>
            </Card>
        </Grid>
             
        
      </div>
    );
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const StyledMenu = withStyles({
        paper: {
         
          backgroundColor: "black"
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
      <div>
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
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <MenuItem onClick={toggleDrawer(anchor, true)}>profile</MenuItem>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={() => auth.signOut()} className={classes.menu}>Logout</MenuItem>
        </MenuList>
        </StyledMenu>
      </div>
    );
  }