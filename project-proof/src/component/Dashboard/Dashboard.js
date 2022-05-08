import { useEffect,useState } from "react";

function Dashboard(){

    const [username, setusername] = useState([]);

    useEffect(()=>{
        const loggedInUser = localStorage.getItem("username");
        console.log(loggedInUser)

        if (!loggedInUser){
        window.location = "/signin"
        }else{
            const username = JSON.parse(loggedInUser);
            setusername(username);
        }

        
    },[])

    return(
        <h1 align="center">Wellcome to DashBoard {username}</h1>
    )
}

export default Dashboard;