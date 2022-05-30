import  {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import {  Button, Grid, TextField } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import axios from 'axios';


const btnStyle={margin:'8px 0'};
const textStyle={margin:'0px 0px 12px 0px'};

const SecondView = () => {
    
    const [credentials,setCredentials] = useState({password:''});
    const token = localStorage.getItem("userToken")

    credentials.token = token

    const handleChange = (e) => {
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }
    
    const navigate = useNavigate();

    const onClickSubmit = (e) =>{
        e.preventDefault();
        console.log(credentials)
        const {data:res} =  axios.post("http://localhost:4500/auth/checkpw",credentials);  
        console.log(res)
        localStorage.setItem("userId",JSON.stringify(res.userId));  
        localStorage.setItem("userEmail",JSON.stringify(res.userEmail));
        // const username = localStorage.getItem("userEmail").split('@')[0];
        const username = res.userEmail.split('@')[0];
        localStorage.setItem("username",JSON.stringify(username));

        // navigate('/dashboard',{state:{dataId:res.data}})

        // navigate('/dashboard/editprofile');
    }

    return(
    <div>
        <form onSubmit={onClickSubmit}>
            <Grid align='center'>
             <h2>Enter your password to continue</h2>
             <TextField label="Enter password" type="password" name="password" fullWidth required style={textStyle} value={credentials.password} onChange={handleChange} />
            </Grid>

      <div>
          
      </div>

        <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle} >Next<NavigateNextIcon/></Button>
        </form>
        </div>

    )
}

export default SecondView;