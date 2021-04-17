import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
    
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    function handleChange(event) {
        console.log(event.target.value);
        setName(event.target.value);
    }

    // handle the click of submit button
    function handleClick() {
        //
    }

    return (
        <div className="container">
            
            <h1>Login</h1>
            <form>
                <input // username text box
                onChange={handleChange}
                type="text"
                placeholder="Username"
                value={name}
                />


                <input // password text box
                onChange={handleChange}
                type="text"
                placeholder="Password"
                //value
                />

                <button
                onClick={/*function*/}>Submit</button>
            </form>
        </div>
    );
}

export default App;