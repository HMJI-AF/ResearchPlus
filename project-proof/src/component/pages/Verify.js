import axios from "axios";
import {React, useEffect, useRef} from "react";
// import { us } from 'react-router-dom';
import {  useParams } from 'react-router-dom';

const Verify = () => {

    // const navigate = useNavigate();
    const { token } = useParams();

    useEffect(async () => {            
        try{
            await axios.post('http://localhost:4500/auth/verify/' + token).then(() => {
                console.log("vade hari");
                // navigate('/landedpage');
                window.location.href = "/landedpage";
            }) 
        }
        catch(err){
            console.log("vade awl");
            console.log(err)
        }            
    })

    return(
        <div>
            <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        </div>
    )
}

export default Verify;