import { useEffect,useState } from "react";
import NavBar from './components/NavBar'

function Dashboard(){

    const [username, setusername] = useState([]);

    const logout = () => {
        localStorage.clear("username");
        window.location = "/signin"
    }

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
        <NavBar/>
        
        <h1 align="center">Wellcome to DashBoard {username}</h1>
        <button onClick={logout}>LogOut</button>

        </div>
    )
}

export default Dashboard;