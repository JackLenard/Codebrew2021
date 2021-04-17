import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Login() {
    
    const [name] = useState("");
    const [password] = useState("");
    const [isMouseOver, setMouseOver] = useState(false);
    const history = useHistory();
    
    function handleChange(event) {
        console.log(event.target.value);
    }

    // handle the click of submit button
    function handleClick() {
        history.push('/class');
    }

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false)
    }
    
    function validateForm() {
        return name.length > 0 && password.length > 0;
    }

    return (
        <div className="Login">
            
            <h1>Login</h1>
            <form>
                <input // username text box
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Username"
                value={name}
                />


                <input // password text box
                onChange={handleChange}
                //onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Password"
                value={password}
                />

                <button
                style={{ backgroundColor : isMouseOver ? "white" : "blue"}}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                disabled={!validateForm()}>
                Submit
                </button>
            </form>
        </div>
    );
}

export default Login;