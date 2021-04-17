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
      <Card.Title>Science Class</Card.Title>
      <Button variant="primary" href = '/ScienceChat'>Enter your class now</Button>
    </Card.Body>
  </Card>
  </div>);
}
export default Science;
