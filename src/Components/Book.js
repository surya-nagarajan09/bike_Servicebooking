import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import axios from "axios"
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));


const ButtonStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 300,
      },
    },
  }));

export default function FullWidthGrid() {
  const classes = useStyles();
  const button=ButtonStyles();
  const[form,setForm]=useState({firstName:"",lastName:"",mobile:"",email:"",bikemanufacturer:"",model:"",bikenumber:"",servicedate:"",zipcode:"",location:"",fulladress:"",query:""})
  const[msg,setMsg]=useState({firstName:"",lastName:"",mobile:"",email:"",bikemanufacturer:"",model:"",bikenumber:"",servicedate:"",zipcode:"",location:"",fulladress:"",query:""})
  const[error,setError]=useState({firstName:false,lastName:false,mobile:false,email:false,bikemanufacturer:false,model:false,bikenumber:false,servicedate:false,zipcode:false,location:false,fulladress:false,query:false});
  const[result,setResult]=useState("");
  const date=new Date();
  const[display,setDisplay]=useState("")
   



  const handleform=(e)=>{
      e.preventDefault();
      const{firstName,lastName,mobile,email,model,bikenumber,servicedate,zipcode,location,fulladress,query}=form
    
       if(firstName===""){
           setMsg({...msg,firstName:"cant be empty"});
           setError({...error,firstName:true})    
       }else if(lastName===""){
           setMsg({...msg,lastName:"cant be empty"});
           setError({...error,lastName:true})
        }else if(mobile===""){
            setMsg({...msg,mobile:"cant be empty"})
            setError({...error,mobile:true})
        }else if(email===""){
            setMsg({...msg,email:"cant be empty"})
            setError({...error,email:true});
        }else if(mobile===""){
            setMsg({...msg,mobile:"cant be empty"});
            setError({...error,mobile:true})
        }else if(email===""){
            setMsg({...msg,email:"cant be empty"});
            setError({...error,email:true});
        }else if(model===""){
            setMsg({...msg,model:"cant be empty"});
            setError({...error,model:true})
        }else if(bikenumber===""){
            setMsg({...msg,bikenumber:"cant be empty"});
            setError({...error,bikenumber:true})
        }else if(servicedate===""){
            setMsg({...msg,servicedate:"cant be empty"});
            setError({...error,servicedate:true})
        }else if(zipcode===""){
            setMsg({...msg,zipcode:"cant be empty"});
            setError({...error,zipcode:true})
        }else if(location===""){
            setMsg({...msg,location:"cant be empty"});
            setError({...error,location:true})
        }else if(fulladress===""){
            setMsg({...msg,fulladress:"cant be empty"});
            setError({...error,fulladress:true})
        }else if(query===""){
            setMsg({...msg,query:"if no specified repair fill null"});
            setError({...error,query:true})
          }else{
              setResult(<LinearProgress/>)
              axios.post("https://bikeservicebookingapp.herokuapp.com/book",form).then((res)=>{
                  if(res.status===200)
                  {
                      setResult("");
                      setDisplay("your service booked successfully")
                  }
              },(err)=>{
                      setDisplay('Something Went Wrong')
            })      
          }
  }


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          <Grid xs={12}>
          <Card style={{backgroundColor:"black"}}className={classes.root} >
                  <CardContent>
                      <Typography style={{color:"#ffcb0c",backgroundColor:"black"}} variant="h2">Book service</Typography>
                 </CardContent>
                 <Typography>{result}</Typography> 
              </Card>

          </Grid>
        <Grid item xs={12}>
          <div>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleform}>
     
      <div className={button.root}>   
        <TextField  error={error.firstName===true} id="outlined-error-helper-text" label="First Name" onChange={(e)=>setForm({...form,firstName:e.target.value})} defaultValue={form.firstName} helperText={msg.firstName} variant="outlined"/>
        <TextField  error={error.lastName===true} id="outlined-error-helper-text" label="Last Name" onChange={(e)=>setForm({...form,lastName:e.target.value})} defaultValue={form.lastName} helperText={msg.lastName} variant="outlined"/>
      </div>
      <div className={button.root}>   
        <TextField  type="number" error={error.mobile===true} id="outlined-error-helper-text" label="Mobile Number" onChange={(e)=>setForm({...form,mobile:e.target.value})} defaultValue={form.mobile} helperText={msg.mobile} variant="outlined"/>
        <TextField  type="email" error={error.email===true} id="outlined-error-helper-text" label="E-mail" onChange={(e)=>setForm({...form,email:e.target.value})} defaultValue={form.email} helperText={msg.email} variant="outlined"/>
      </div>
      <div className={button.root}>   
        <TextField  type="text" error={error.bikemanufacturer===true} id="outlined-error-helper-text" label="Bike manufacturer" onChange={(e)=>setForm({...form,bikemanufacturer:e.target.value})} defaultValue={form.bikemanufacturer} helperText={msg.bikemanufacturer} variant="outlined"/>
        <TextField  type="text" error={error.model===true} id="outlined-error-helper-text" label="Model" onChange={(e)=>setForm({...form,model:e.target.value})} defaultValue={form.model} helperText={msg.model} variant="outlined"/>
      </div>
      <div className={button.root}>   
      <TextField  type="number" error={error.bikenumber===true} id="outlined-error-helper-text" label="Bike Number" onChange={(e)=>setForm({...form,bikenumber:e.target.value})} defaultValue={form.bikenumber} helperText={msg.bikenumber} variant="outlined"/>
      <TextField id="datetime-local"label="Service Date"type="datetime-local" error={error.servicedate===true} defaultValue={date} helperText={msg.servicedate} InputLabelProps={{ shrink: true,}} onChange={(e)=>setForm({...form,servicedate:e.target.value})}/>    
      </div>
      <div className={button.root}>   
      <TextField  type="number" error={error.zipcode===true} id="outlined-error-helper-text" label="Zip code" onChange={(e)=>setForm({...form,zipcode:e.target.value})} defaultValue={form.zipcode} helperText={msg.zipcode} variant="outlined"/>
      <TextField  type="text" error={error.locaiton===true} id="outlined-error-helper-text" label="Location" onChange={(e)=>setForm({...form,location:e.target.value})} defaultValue={form.location} helperText={msg.location} variant="outlined"/>
         
      </div>
      <div className={button.root}>   
      <TextField  type="text" error={error.fulladress===true} width="full" id="outlined-error-helper-text" label="Address" onChange={(e)=>setForm({...form,fulladress:e.target.value})} defaultValue={form.fulladress} helperText={msg.fulladress} variant="outlined"/> 
      <TextField  type="text" error={error.query===true} width="full" id="outlined-error-helper-text" label="Any specified bike repair" onChange={(e)=>setForm({...form,query:e.target.value})} defaultValue={form.query} helperText={msg.query} variant="outlined"/>      
      </div>
    </form>
    <div>
        <Grid xs={12}>
          <div >
          <Button style={{width:500,height:40,backgroundColor:"black",color:"#ffcb0c"}} variant="contained" varaint='h4' onClick={handleform}>Submit</Button> 
          </div>

          <div  style={{diplay:"flex",justifyContent:"center"}} >
            <Typography variant="h4">{display}</Typography>
        

          </div>
        

        
        </Grid> 
    </div>
          </div>
       
        </Grid>
       
      </Grid>
  
    </div>
  );
}
