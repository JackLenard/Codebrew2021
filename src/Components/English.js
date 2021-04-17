import React from 'react';
import Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

function English(){
  const history = useHistory();
  const handleClick = () => history.push('/English');
  return(
  <div>
  <Card style={{ width: '18rem', backgroundColor: 'Danger'  }}>
    <Card.Body>
      <Card.Title>English class</Card.Title>
      <Button variant="primary" onclick = {handleClick}>Enter your class now</Button>
    </Card.Body>
  </Card>
  </div>);
}
export default English;
