import { useEffect,useState } from "react";
import { Route, Routes } from "react-router-dom";

import Logout from "./components/Logout";
import NavBar from './components/NavBar'
import Profile from "./components/Profile";
// import Test2 from "./components/Test2";
import LandedPage from "./../pages/LandedPage"
import AddGroup from "../GroupReg/AddGroup";
import UserGroup from "../GroupReg/UserGroups";

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
        <Route path="/editprofile" element={<EditProfile/>}/>
        <Route path="/Test2" element={<LandedPage/>}/>
        <Route path="/addgroup" element={<AddGroup />} />
        <Route path="/Group" element={<UserGroup />} />
        </Routes>
        </div>
    )
}

export default Dashboard;