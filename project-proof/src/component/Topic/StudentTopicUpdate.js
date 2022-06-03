import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Button, FormControl, Grid, InputLabel, Paper, Select, TextField, Typography } from "@mui/material";

const paperStyle={padding:20, height:'auto', width:600, margin:'20px auto'};
const textStyle={margin:'0px 0px 12px 0px'};
const btnStyle={margin:'8px 0'};

export default function studTopic() {

    const { id } = useParams();

    const [topics, setTopics] = useState({
      person1: "",
      topic: "",
      supervisor: "",
      supervisorOpinion: "",
      coSupervisor: "",
      coSupervisorOpinion: ""
      });

    const { person1, topic, supervisor, supervisorOpinion, coSupervisor, coSupervisorOpinion } = topic;

    useEffect(() => {
        loadUser();
      }, []);
  
    const loadUser = async () => {
        const result = await axios.get("http://localhost:4500/topic/" + localStorage.getItem("username"));
        console.log(result);
        setTopic(result.data);
    }

    const onInputChange = e => {
        setTopics({...topic, [e.target.name]: e.target.value});
    }

    const onSubmit = async e => {
        e.preventDefault();     
        if(true){
            await axios.put('http://localhost:4500/topic/update/' + localStorage.getItem("username"), user).then(() => {
                alert("Updated Successfully");
            }).catch((err) => {
                alert(err);
            }) 
            // window.location = "/dashboard/profile";
        }              
    }

    return(

       


<div>
        <Grid>

      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <h2>Profile </h2>
        </Grid>

        <form onSubmit={e => onSubmit(e)}>
        <TextField label="User Name" type="text" name="userName" value={person1} fullWidth required style={textStyle} onChange={ e => onInputChange(e)} />
        <TextField label="E-mail" type="text" name="email" value={topic} fullWidth required style={textStyle} />
        <TextField label="Phone"  type="text" name="phone" value={supervisor} fullWidth required style={textStyle} onChange={ e => onInputChange(e)} />
        <TextField label="Role"  type="text" name="role" value={supervisorOpinion} fullWidth required style={textStyle} />
        <TextField label="Phone"  type="text" name="phone" value={coSupervisor} fullWidth required style={textStyle} onChange={ e => onInputChange(e)} />
        <TextField label="Role"  type="text" name="role" value={coSupervisorOpinion} fullWidth required style={textStyle} />

        <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle}>Update Customer</Button>
        </form>

        
      </Paper>
    </Grid>

    </div>


    
    );
}