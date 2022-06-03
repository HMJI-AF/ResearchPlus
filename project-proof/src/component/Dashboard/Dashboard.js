import { useEffect,useState } from "react";
import { Route, Routes } from "react-router-dom";
import Logout from "./components/Logout";
import NavBar from './components/NavBar'
import Profile from "./components/Profile";
import AddGroup from "../GroupReg/AddGroup";
import UserGroup from "../GroupReg/UserGroups";
import AddTopic from "../Topic/AddTopic";
import TopicReq from "../Topic/TopicReq";
import studTopic from "../Topic/TopicReq";

function Dashboard(){

    // const value = false;

    // const [user, setUser] = useState([]);
    const [username, setusername] = useState([]);



    useEffect(()=>{
        const loggedInUser = localStorage.getItem("username");
        // const loggedInUserId = localStorage.getItem("userId");

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



        {/* The user is <b>{value ? 'currently' : 'not'}</b> logged in. */}
        <Routes>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/Logout" element={<Logout />} />
        <Route path="/addgroup" element={<AddGroup />} />
        <Route path="/Group" element={<UserGroup />} />
        <Route path="/Topic" element={<AddTopic />} />
        <Route path="/Topic_reqests" element={<TopicReq />} />
        <Route path="/studTopic" element={<studTopic />} />
        </Routes>
        </div>
    )
}

export default Dashboard;