import {  Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import AppLogo from './../../images/SignIn&SignUp/lwre.png';
import Logo from './../../images/SignIn&SignUp/sliit_logo.png';
// import GoogleButton from "react-google-button";
// import axios from 'axios';


const paperStyle={padding:20, height:'auto', width:300, margin:'20px auto'};
const paperStyle2={padding:10};
const textStyle={margin:'0px 0px 12px 0px'};
const btnStyle={margin:'8px 0'};
const bottomText={margin:'10px 0px 10px 0px'};
// const bottomTextOr={margin:'10px 0px 10px 0px', fontSize:'50px'}

const SignUp=()=>{

  const history = useNavigate();
    const redirect = (path,data) => {
      history(path,data)
    }

  const [credentials,setCredentials] = useState({
    email:'',
    password:'',
    cpassword:''
  });
  
  const handleChange = (e) =>{
    setCredentials({...credentials,[e.target.name]:e.target.value});}

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!(credentials.password===credentials.cpassword)){
      console.log("Error in password");
    }else{
        const user = {
          "email":credentials.email,
          "password":credentials.password,
          "isVerified":false
        }
        console.log(user);
    }
  }
  // const googleSignIn = () =>{
  //   console.log("Pressed")
  // }


  return(
    <Grid>
      <Paper elevation={10} style={paperStyle2}>
        <div align="left">
        <img src={AppLogo} alt="Logo" />
        </div>
        </Paper>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <img src={Logo} alt="Logo" />
          <h2>Sign Up </h2>
        </Grid>
        <form onSubmit={handleSubmit}>
        <TextField label="Enter SLIIT Email Address" type="email" name="email" fullWidth required style={textStyle} value={credentials.email} onChange={handleChange} />
        <TextField label="Password"  type="password" name="password" fullWidth required style={textStyle} value={credentials.password} onChange={handleChange}/>
        <TextField label="Confirm Password"  type="password" name="cpassword" fullWidth required style={textStyle} value={credentials.cpassword} onChange={handleChange}/>
        <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle} disabled={ !(/^([A-Za-z0-9_\-.])+@(["my.sliit"])+\.(["lk"]{2,})$/.test(credentials.email)) }
        onClick={()=>{
          if (credentials.password === credentials.cpassword){
            redirect("/secretsignup",{state:{credentials}});
          }

          

        }}>Sign Up</Button>
        </form>
        <div align='center' style={bottomText}>
        <Typography>Do you have an account?
          <Link href="signin">
            Sign In
          </Link>
        </Typography>
        </div>
        {/* <div align='center'style={bottomTextOr}>
        <Typography> Or </Typography>
        </div>
        <div align="center">
        <GoogleButton type="light" label="Continue with Google" onClick={googleSignIn}/>
        </div> */}
      </Paper>
    </Grid>
  );
}


export default SignUp;