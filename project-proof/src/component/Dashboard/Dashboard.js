import { useEffect,useState } from "react";
import { Route, Routes } from "react-router-dom";
import Logout from "./components/Logout";
import NavBar from './components/NavBar'
import Profile from "./components/Profile";

function Dashboard(){

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
        <Routes>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/Logout" element={<Logout />} />
        </Routes>
        </div>
    )
}

export default Dashboard;