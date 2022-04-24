import  {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import {  Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
// import bcrypt from "bcryptjs/dist/bcrypt";

import AppLogo from './../../images/SignIn&SignUp/lwre.png';
import Logo from './../../images/SignIn&SignUp/sliit_logo.png';

const paperStyle={padding:20, height:'auto', width:300, margin:'20px auto'};
const paperStyle2={padding:10};
const textStyle={margin:'0px 0px 12px 0px'};
const btnStyle={margin:'8px 0'};
const typoStyle={align:'center'};
const bottomText={margin:'10px 0px 10px 0px'}

    const SignIn = () =>{

    const history = useNavigate();
    const redirect = (path) => {
      history(path)
    }

    const [credentials,setCredentials] = useState({
      email:'',
      password:''});

    const handleSubmit = (e) =>{

      e.preventDefault();
  
      // input.password = bcrypt.hashSync(input.password,'$2a$10$CwTycUXWue0Thq9StjUM0u')
      // input.password = hashedPassword;
      
      console.log(credentials);
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
         onChange={e=> setCredentials({email:e.target.value, password:credentials.password})} />
        <TextField label="Password"  type="password" name="password" fullWidth required style={textStyle} value={credentials.password}
         onChange={e=> setCredentials({email:credentials.email, password:e.target.value})}/>

        <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle}
        disabled={ !(/^([A-Za-z0-9_\-.])+@(["my.sliit"])+\.(["lk"]{2,})$/.test(credentials.email)) }
        onClick={()=>{
          if (credentials.password === "let-me-in")
            redirect("/secret");
        }}>Sign In</Button>
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
          <Link href="signup">
            Sign Up
          </Link>
        </Typography>
        </div>
        
      </Paper>
    </Grid>
      
    )

}

export default SignIn;