import {  Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AppLogo from './../../images/SignIn&SignUp/lwre.png';
import Logo from './../../images/SignIn&SignUp/sliit_logo.png';
import GoogleButton from "react-google-button";

const paperStyle={padding:20, height:'auto', width:300, margin:'20px auto'};
const paperStyle2={padding:10};
const textStyle={margin:'0px 0px 12px 0px'};
const btnStyle={margin:'8px 0'};
const bottomText={margin:'10px 0px 10px 0px'};
const bottomTextOr={margin:'10px 0px 10px 0px', fontSize:'50px'}

const SignUp=()=>{

  const [input,setInput] = useState({
    
  });
  
  const handleChange = (e) =>{
      
    setInput({...input,[e.target.name]:e.target.value});}

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(input.password===input.cpassword){
        console.log(input);
    }else{
        console.log("Error in password");
    }
    
  }

  const googleSignIn = (e) =>{
    window.location="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=1009812085345-b2tp8osigmrsfq66ihacjiqlkru8s9ta.apps.googleusercontent.com&scope=openid%20email&redirect_uri=https://localhost&";
  }

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
        <TextField label="Enter SLIIT Email Address" type="email" name="email" fullWidth required style={textStyle} value={input.email} onChange={handleChange} />
        <TextField label="Password"  type="password" name="password" fullWidth required style={textStyle} value={input.password} onChange={handleChange}/>
        <TextField label="Confirm Password"  type="password" name="cpassword" fullWidth required style={textStyle} value={input.cpassword} onChange={handleChange}/>
        <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle}>Sign Up</Button>
        </form>
        <div align='center' style={bottomText}>
        <Typography>Do you have an account?
          <Link href="signin">
            Sign In
          </Link>
        </Typography>
        </div>
        <div align='center'style={bottomTextOr}>
        <Typography> Or </Typography>
        </div>
        <div align="center">
        <GoogleButton fullWidth type="light" label="Continue with Google" onClick={googleSignIn}/>
        </div>
      </Paper>
    </Grid>
  );
}


export default SignUp;