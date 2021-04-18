import React from 'react';
import Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

function Science(){
  const history = useHistory();
  const handleClick = () => history.push('/Science');
  return(
  <div>
  <Card style={{ width: '18rem', backgroundColor: 'Danger'  }}>
    <Card.Body>
<<<<<<< Updated upstream
      <Card.Title>Science Class</Card.Title>
      <Button variant="primary" href = '/ScienceChat'>Enter your class now</Button>
=======
<<<<<<< HEAD
      <Card.Title>Science class</Card.Title>
      <Button variant="primary" onClick = {handleClick}>Enter the chat</Button>
=======
      <Card.Title>Science Class</Card.Title>
      <Button variant="primary" href = '/ScienceChat'>Enter your class now</Button>
>>>>>>> main
>>>>>>> Stashed changes
    </Card.Body>
  </Card>
  </div>);
}
export default Science;
