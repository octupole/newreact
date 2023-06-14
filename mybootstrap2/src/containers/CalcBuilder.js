import React, { useState, useEffect } from 'react';
import Aux from '../components/Aux'
import { Col, Container, Input, Buttons, Form, FormGroup, Label, FormText} from 'reactstrap';

const CalcBuilder = (props) => {
  const [ingredients, setValue] = useState(
    {
      flour: 0,
      water: 0,
      levain: 0,
      salt: 0,
      totalWeight: 500
    }
  );
  const [percent, setPercent] = useState(
    {
      flour: 100,
      water: 60,
      levain: 25,
      hydration: 0,
      total:0,
    }
  );

  useEffect(() => {
    let mypercent={...percent};
    mypercent.total=percent.flour+percent.water+percent.levain;
    setPercent(mypercent);
  },[percent.flour,percent.levain,percent.water]);
  return (
    <Aux>
      <Container> <h1> Hello There {percent.total}</h1></Container>
      <Form>
      <FormGroup row>
        <Label for="exampleNumber" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="number" name="email" id="exampleEmail" 
          placeholder="flour" value={percent.flour}/>
        </Col>
      </FormGroup>
      </Form>      
    </Aux>
  )
}

export default CalcBuilder;