import React from 'react';
import Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';

function Maths(){
  return(
  <div>
  <Card style={{ width: '18rem', backgroundColor: 'Primary'}}>
    <Card.Body>
      <Card.Title>Math class</Card.Title>
      <Button variant="primary">Enter your class now</Button>
    </Card.Body>
  </Card>
  </div>);
}
export default Maths;
