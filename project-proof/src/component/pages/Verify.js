import axios from "axios";
import {React, useEffect} from "react";
import {  useParams } from 'react-router-dom';

const Verify = () => {

    const { token } = useParams();

    useEffect(() => {            
        try{
            axios.post('http://localhost:4500/auth/verify/' + token).then(() => {
                console.log("vade hari");
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