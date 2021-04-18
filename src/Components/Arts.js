import React from 'react';
import Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

function Arts(){
  const history = useHistory();
  const handleClick = () => history.push('/ArtsChat');
  return(
  <div>
  <Card style={{ width: '18rem', backgroundColor: 'Danger'  }}>
    <Card.Body>
      <Card.Title>Art class</Card.Title>
<<<<<<< Updated upstream
      <Button variant="primary" href = '/ArtsChat'>Enter your class now</Button>
=======
<<<<<<< HEAD
      <Button variant="primary" onClick = {handleClick}>Enter the chat</Button>
=======
      <Button variant="primary" href = '/ArtsChat'>Enter your class now</Button>
>>>>>>> main
>>>>>>> Stashed changes
    </Card.Body>
  </Card>
  </div>);
}
export default Arts;
