import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Navigation (){
  return(
    <div>
    <Navbar class = "Navbar" bg="primary" variant="dark">
       <Navbar.Brand href="/">Navbar</Navbar.Brand>
       <Nav className="mr-auto">
         <Nav.Link href="/">Home</Nav.Link>
       </Nav>
       <Nav className="ml-auto">
         <Nav.Link href="#login">Login</Nav.Link>
       </Nav>
     </Navbar>
     </div>
  );
}
export default Navigation;
