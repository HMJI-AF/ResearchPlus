import  {useState} from 'react';
import {  Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import axios from 'axios';

import AppLogo from './../../images/SignIn&SignUp/lwre.png';
import Logo from './../../images/SignIn&SignUp/sliit_logo.png';

const paperStyle={padding:20, height:'auto', width:300, margin:'20px auto'};
const paperStyle2={padding:10};
const textStyle={margin:'0px 0px 12px 0px'};
const btnStyle={margin:'8px 0'};
const typoStyle={align:'center'};
const bottomText={margin:'10px 0px 10px 0px'};
const errorMsg = {width:"auto", padding: "15px", margin:"5px 0",fontSize: "15px",backgroundColor:"#f34646",color:"white",textAlign:"center", borderRadius:"4px"};;

const SignIn = () =>{

    const [credentials,setCredentials] = useState({
      email:'',
      password:''});

    const [error,setError] = useState("");

    const handleChange = (e) => {
      setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e) =>{
      e.preventDefault();
      try{
        const {data:res} = await axios.post("http://localhost:4500/auth",credentials);
        const username = credentials.email.split('@')[0];
        localStorage.setItem("username",JSON.stringify(username));  
        //To get Token
        console.log(res.data)
        window.location = "/dashboard"
      }catch(error){
        if(
          error.response &&
          error.response.status >=400 &&
          error.response.status <=500
        ){
          setError(error.response.data.message);
        }
      }
    }

    return (

      <Grid>
      <Paper elevation={10} style={paperStyle2}>
        <div align="left">
        <img src={AppLogo} alt="Logo" />
        </div>
        </Paper>

      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <img src={Logo} alt="Logo" />
          <h2>Sign In </h2>
        </Grid>

        <form onSubmit={handleSubmit}>
        <TextField label="Enter SLIIT Email Address" type="text" name="email" fullWidth required style={textStyle} value={credentials.email}
         onChange={handleChange} />
        <TextField label="Password"  type="password" name="password" fullWidth required style={textStyle} value={credentials.password}
         onChange={handleChange}/>
          {error && <div style={errorMsg}>{error}</div>}
        <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle}
        disabled={ !(/^([A-Za-z0-9_\-.])+@(["my.sliit"])+\.(["lk"]{2,})$/.test(credentials.email)) }
        
        >Sign In</Button>
        </form>

        <div align='center' style={bottomText}>
          <div  className={typoStyle}>
        <Typography>
          <Link href="#">
          Forgot Password?
          </Link>
        </Typography>
        </div>
        </div>
        
        <div align='center'style={bottomText}>
        <Typography>Don't you have an account?
          <Link href="/signup">
            Sign Up
          </Link>
        </Typography>
        </div>
        
      </Paper>
    </Grid>
      
    )

}

export default SignIn;