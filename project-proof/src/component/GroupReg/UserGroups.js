import { useEffect,useState } from "react";
import axios from "axios";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Table } from "@mui/material";
// import AdminUserTable from "./AdminUserTable";

function UserGroup(){
    
    const [Group, setGroup] = useState([]);
    const [username, setusername] = useState([]);


    useEffect(()=>{
        const loggedInUser = localStorage.getItem("username");
        // const userId = JSON.parse(loggedInUser);

        if (!loggedInUser){
        window.location = "/signin"
        }else{
            const username = (JSON.parse(loggedInUser)).toUpperCase();
           setusername(username);
    
        }

             axios.get(`http://localhost:4500/groups/`)
             .then((res)=>{
                let Group = res.data;
                    console.log({username})
                    console.log(res.person1)
                    setGroup(Group);
                // console.log(Group)

            }).catch((err)=>{
                    alert(err.message)
            })
 
    }
    )

    //// if(user.role=='admin'){
    ////     const userRole = 
    //// }

    return (
        <div>
            <hr/>
            <h4><center>Groups</center></h4>
            <hr/>

            <div>                 
                    
                {Group.map((val)=>{
                        return <div>  
                            <Table class="table table-sm" style={{border: "2px solid", width: "45%", textAlign: 'center', borderCollapse: 'collapse',marginLeft: 'auto',  marginRight: 'auto'}} >
                                <tr style={{height: '30px'}}><td>{val.person1}</td></tr>
                                <tr style={{height: '30px'}}><td>{val.person2}</td></tr>
                                <tr style={{height: '30px'}}><td>{val.person3}</td> </tr>
                                <tr style={{height: '30px'}}><td>{val.person4}</td></tr>
                            </Table>
                            </div>
                    })}
                
            </div>


        </div>
    )
}

export default UserGroup;