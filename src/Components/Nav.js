import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link } from "react-router-dom"
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.dis}>
        <AppBar style={{backgroundColor:"black",color:"yellow",marginBottom:"10px"}} position="fixed">
        <Toolbar >
            <div style={{display:"flex",flexWrap:"wrap",padding:"20px",margin:'5px'}}>
            <Typography variant="h6">
            <Link to="/" style={{color:"yellow"}}>Home</Link>    
        </Typography>
        <Typography variant="h6" >
            <Link to="/Book" style={{color:"yellow",padding:"50px"}}>Book</Link>     
        </Typography>

            </div>
    
        </Toolbar>
      </AppBar>
            
        </div>
      
    </div>
  );
}
