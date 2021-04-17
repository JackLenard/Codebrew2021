import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import English from './English';
import Maths from './Maths';
import Science from './Science';
import Arts from './Arts';

function Class(){
  return(
    <div class = "Class">
    <Row>
    <Col><English/></Col>
    <Col><Maths/></Col>
  </Row>
  <Row>
    <Col><Arts/></Col>
  <Col><Science/></Col>
</Row>
  </div>);
}
export default Class;
