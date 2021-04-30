import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:15,
      alignItems: 'center',
      justifyContent:"center",
      display:"flex",
      flexWrap:"wrap",   
    },
     media: {
        maxWidth: 500,
        height:120, 
      },
      bike:{
        maxWidth: 500,
        height:300
      },
      arrange: {
          display:"flex",
          justifyContent:"center",
          flexWrap:"wrap",
          alignItems: "center",
    }
  }));



const Home=()=>{
    const classes =useStyles();
    

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
               <Grid item xs={12} >
               <Card style={{backgroundColor:"black"}} className={classes.root} >
                  <CardContent>
                      <Typography style={{color:"#ffcb0c",padding:"30px"}}variant="h3">Welcome to Book a Mech</Typography>
                 </CardContent>
              </Card>
              </Grid>
              <div className={classes.arrange} >
              <Card className={classes.root} >
                  <CardContent>
                      <Typography style={{color:"#ffcb0c"}} variant="h5">STEP 1: BOOKING<DoubleArrowIcon/></Typography>
                      <CardActionArea>
                      <img className={classes.media} src="http://www.bookamech.com/img/user-chat.svg" alt="hlo"/>
                      </CardActionArea>
                    <Typography variant="h6" component="p">Schedule the booking for the bike service</Typography>
                 </CardContent>
              </Card>
              <Card className={classes.root} >
                  <CardContent>
                      <Typography  style={{color:"#ffcb0c"}} variant="h5">STEP 2: SERVICE<DoubleArrowIcon/></Typography>
                      <CardActionArea>
                      <img className={classes.media} src="http://www.bookamech.com/img/wrenches.svg" alt="hlo"/>
                      </CardActionArea>
                    <Typography variant="h6" component="p">Our mechanic will arrive at the time and place scheduled </Typography>
                 </CardContent>
              </Card>
              <Card className={classes.root} >
                  <CardContent>
                      <Typography   style={{color:"#ffcb0c"}} variant="h5">STEP 3: PAYMENT<DoubleArrowIcon/></Typography>
                      <CardActionArea>
                      <img className={classes.media} src="http://www.bookamech.com/img/payemnt.svg" alt="hlo"/>
                      </CardActionArea>
                    <Typography variant="h6" component="p">card or cash only statisfied</Typography>
                 </CardContent>
              </Card>
              </div>
              <Grid xs={12}>
              <div style={{display:"flex",justifyContent:"center"}}>
                 <Button style={{width:500,height:40,backgroundColor:"black",color:"#ffcb0c"}} variant="contained" varaint='h4' href="book">Book Now</Button>
             </div>
              </Grid>
              <Grid xs={12}>
              <div style={{display:"flex",justifyContent:"center"}}>
                <Typography   style={{color:"#ffcb0c"}} variant="h3" >Motorbike Service</Typography>
             </div>
            
              </Grid>
              <Grid  xs={12} sm={6}>
              <CardActionArea>
                      <img className={classes.bike} src="https://kawasaki-india.com/wp-content/uploads/2018/04/H2R-removebg-preview-1.png" alt="img"/>
             </CardActionArea>
              </Grid>
              <Grid xs={12} sm={6}>
                  <div style={{textAlign:"left"}}>   
                     <Typography  variant="h4" >✓Check list</Typography>
                    <Typography variant="h5" >✓Test drive the bike for identifying problems.</Typography>
                    <Typography variant="h5">✓Check and clean/replace air filter.</Typography>
                    <Typography variant="h5" >✓Check and clean/replace spark plug.</Typography>
                    <Typography variant="h5" >✓Check engine oil and replace if necessary</Typography>
                    <Typography variant="h5">✓Inspect brake shoe wear and adjust or replace as per requirement.</Typography>
                    <Typography variant="h5">✓Inspect steering system.</Typography>
                    <Typography variant="h5">✓Greasing of Front wheel axle.</Typography>
                    <Typography variant="h5">✓Check for noises, vibrations and jerking while running.</Typography>
                  </div>
                   
              </Grid>
              
              
            </Grid>
      </div>
    )
}

export default Home;