import React from 'react';
import Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

function Science(){
  const history = useHistory();
  const handleClick = () => history.push('/ScienceChat');
  return(
  <div>
  <Card style={{ width: '18rem', backgroundColor: 'Danger'  }}>
    <Card.Body>
      <Card.Title>Science class</Card.Title>
      <Button variant="primary" onClick = {handleClick}>Enter your class now</Button>
    </Card.Body>
  </Card>
  </div>);
}
export default Science;
