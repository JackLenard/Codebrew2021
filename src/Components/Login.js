import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';

function Login() {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    //const [isMouseOver, setMouseOver] = useState(false);
    const history = useHistory();
  const handleClick = () => history.push('/Home');
    function handleChange(event) {
        console.log(event.target.value);
    }

    //function validateForm() {
        //return name.length > 0 && password.length > 0;
    //}

    return (
        <div className="Login">

            <h1>Login</h1>
            <form>
                <input // username text box
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Username"
                />


                <input // password text box
                onChange={handleChange}
                //onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Password"
                />
            <Button variant="primary" onClick = {handleClick}>Submit</Button>
            </form>
        </div>
    );
}

export default Login;
