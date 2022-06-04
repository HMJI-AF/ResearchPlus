import React, { useEffect,useState } from "react";
import {  Button, Grid, Paper } from "@mui/material";
import axios from "axios";
// import Background from './../../images/Group/group_background_image.png';
import { Link, useNavigate, useParams } from 'react-router-dom';

const paperStyle={backgroundColor: "#FFB47F", padding:50, height:'auto', width:700, margin:'20px auto'};
// const textStyle={ height:'auto', width:400,textAlign: "right"};
const btnStyle={margin:'20px 0'};
const text={fontFamily: "Cursive"};
const fromun = {margin:'30px auto'};

 function StuTopicview(){
    const { id } = useParams();

    const [oneTopic, setOneTopic] = useState({
        person1: "",
        topic: "", 
        supervisor: "",
        supervisorOpinion: "",
        coSupervisor: "",
        coSupervisorOpinion: ""
    });

    const { person1, topic, supervisor, supervisorOpinion, coSupervisor ,coSupervisorOpinion} = oneTopic;

    const onInputChange = e => {
        setOneTopic({...oneTopic, [e.target.name]: e.target.value});
    }

    useEffect(()=> {  
        const loggedInUser = localStorage.getItem("username");

        if (!loggedInUser){
        window.location = "/signin"
        }else{
            const username = (JSON.parse(loggedInUser)).toUpperCase();
            // setusername(username);
        }
        
        getTopic();
    }, [])

    function getTopic(){
        axios.get("http://localhost:4500/topic/stu-get-topic/" + JSON.parse(localStorage.getItem("username")).toUpperCase())
        .then((res)=>{
            setOneTopic(res.data);
            console.log(res.data)
        }).catch((err)=>{
           alert(err.massage);
        })
    }

    function sendData(e){  
        e.preventDefault();
  
        axios.put('http://localhost:4500/topic/up-sup-opinion/' + id, oneTopic).then(() => {
            alert("Updated Successfully");
            window.location = ("/dashboard/Topic_reqests");
          }).catch((err)=>{
              alert(err);
          })
      }

    return(
        <Grid style={{backgroundColor: "#FFF5EE"}} >
            {/* <Link to={`/dashboard/Group`} style={{ textDecoration: 'none'}}><Button class="btn btn-outline-success" style={{margin:'50px 0px 0px 50px'}} size="small" color="primary">
            registered groups
            </Button></Link> */}
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'  >
          <h2 style={{color: "#143468"}} >View Topic</h2>
        </Grid>
        <div>
            <form>
                <div style={fromun} >
                    <label style={text} for="name" >Student ID</label>
                    <input name="person1" value={person1} maxlength="10" className="form-control"/>
                </div>           
            
                <div style={fromun}>                
                    <label style={text} for="name" >Topic</label>
                    <input type="text" name="topic" value={topic}  required className="form-control"/>
                </div>           
            
                <div style={fromun}>
                    <label style={text} for="name">Supervisor</label>
                    <input  type="text" name="supervisor" value={supervisor} placeholder="Enter " required className="form-control"/>                    
                </div>

                <div style={fromun}>
                    <label style={text} for="name">Supervisor Opinion</label>
                    <input  type="text" name="supervisor" value={supervisorOpinion} placeholder="Enter " required className="form-control"/>
                    
                </div>
                <div style={fromun}>
                    <label style={text} for="name">Cosupervisor</label>
                    <input  type="text" name="cosupervisor" value={coSupervisor} placeholder="Enter " required className="form-control"/>                    
                </div>

                <div style={fromun}>
                    <label style={text} for="name">Cosupervisor Opinion</label>
                    <input  type="text" name="supervisor" value={coSupervisorOpinion} placeholder="Enter " required className="form-control"/>
                </div>

                {/* <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle} >Submit</Button> */}
            
            </form>
        </div>
        </Paper>
    </Grid>

    )


}

export default StuTopicview;