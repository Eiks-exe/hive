import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
    root:{
      margin:'100px',
    },
    tchat:{
      padding: '10px',
      paddingBottom: '40px',
      minHeight:'80vh',
      maxHeight:'100vh',
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
      display:'flex',
      justifyContent:'',
    },
    UserMenu:{
        background:'rgb(58, 58, 58)',
        color:'white',
        outline:'none',
        '&:focus':{
            outline:'none',
        }
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
      background:'rgb(58, 58, 58)',
      '&:focus':{
        outline:'none',
    }
    },
    buttonMenu:{
        color:'white',
        borderRadius:'0',
        height:'100%',
        borderTopLeftRadius:"15px",
        '&:focus':{
            outline:'none',
        }
    },
    buttonProf:{
        background:'rgb(58, 58, 58)',
        color:'white',
        '&:hover':{
            background:'black',
        },
        '&:focus':{
            outline:'none',
        },
    },
    list: {
        width: 265,
        background:'linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)', 
      },
    fullList: {
        width: 'auto',
      },
    cardRoot:{
        maxWidth : 345,
        minHeight : '100vh',
        background:'linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)',
        display:'flex',
        flexDirection:'column',
        
        alignItems:'center'
    },
    cardMedia:{
        height: 140,
    },
    profilePic:{
        borderRadius : "50%" ,
        boder:'solid 1px black',
        overflow:'hidden',
        background:'white',
        margin:'1rem',
        display:'flex',
        justifyContent:'center',
        
    }
  })