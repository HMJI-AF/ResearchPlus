import { useEffect,useState } from "react";
import axios from "axios";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdminUserTable from "./AdminUserTable";

function Profile(){
    
    const [user, setUser] = useState([]);


    useEffect(()=>{
        const loggedInUserId = localStorage.getItem("userId");


            const userId = JSON.parse(loggedInUserId);

        
             axios.get(`http://localhost:4500/user/${userId}`).then((res)=>{
                let user = res.data;
                setUser(user);

            }).catch((err)=>{
                    alert(err.message)
            })
 
    }
    )

    // if(user.role=='admin'){
    //     const userRole = 
    // }

    return (
        <div>
            <h4><center>User Profile</center></h4>
            <hr/>

            <div>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="body2" gutterBottom>
                Email : {user.email}
            </Typography>
            <Typography variant="body2" gutterBottom>
                Role : {user.role}
            </Typography>
                </Box>

                <Box sx={{ display: 'flex',justifyContent: 'center' }}>
                {(user.role==='admin') &&
                    <AdminUserTable/>
                }
                </Box>
                
            </div>


        </div>
    )
}

export default Profile;