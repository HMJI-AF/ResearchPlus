import {useNavigate } from 'react-router-dom';

function Secret(){

    const history = useNavigate();
    const redirect = (path) => {
      history(path)
    }

    return(
        <div>
            <h1 align="center">Hello World</h1>
            <button onClick={()=>{redirect('/dashboard');}}>Redirect</button></div>
    )
}

export default Secret;