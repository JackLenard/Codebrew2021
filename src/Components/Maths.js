import React from 'react';
import Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
function Maths(){
  const history = useHistory();
  const handleClick = () => history.push('/MathsChat');
  return(
  <div>
  <Card style={{ width: '18rem', backgroundColor: 'Primary'}}>
    <Card.Body>
      <Card.Title>Math class</Card.Title>
      <Button variant="primary" onClick = {handleClick}>Enter the chat</Button>
    </Card.Body>
  </Card>
  </div>);
}
export default Maths;
