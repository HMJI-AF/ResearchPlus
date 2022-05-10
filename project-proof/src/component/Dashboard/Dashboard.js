import { useEffect,useState } from "react";
import NavBar from './components/NavBar'
// import {Routes, Route } from "react-router-dom";

function Dashboard(){

    const [username, setusername] = useState([]);

    useEffect(()=>{
        const loggedInUser = localStorage.getItem("username");

        if (!loggedInUser){
        window.location = "/signin"
        }else{
            const username = (JSON.parse(loggedInUser)).toUpperCase();
            setusername(username);
        }

        
    },[])

    return(

        <div>  
        <NavBar name={username}/>
        </div>
    
    )
}

export default Dashboard;