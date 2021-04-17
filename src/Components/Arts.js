import React from 'react';
import Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

function Arts(){
  const history = useHistory();
  const handleClick = () => history.push('/Arts');
  return(
  <div>
  <Card style={{ width: '18rem', backgroundColor: 'Danger'  }}>
    <Card.Body>
      <Card.Title>Art class</Card.Title>
      <Button variant="primary" onclick = {handleClick}>Enter your class now</Button>
    </Card.Body>
  </Card>
  </div>);
}
export default Arts;
