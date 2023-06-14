import React, { useState, useEffect } from 'react';
import Aux from '../components/Aux'
import { Col, Container, Input, Buttons, Form, FormGroup, Label, FormText } from 'reactstrap';

const CalcBuilder = (props) => {
  const [In, setIngredients] = useState(
    {
      flour: 0,
      water: 0,
      levain: 0,
      salt: 0,
      total: 500
    });
  const [Pe, setPercent] = useState(
    {
      flour: 100,
      water: 60,
      levain: 25,
      salt: 3,
      total: 0,
    });
  const [hydration, setHydration] = useState(0);
  const [coef, setCoef] = useState(0);
  const [data0,setData0] = useState(100);
  const [data1,setData1] = useState(0);

  const dataChangedHandler = (event) => {
    let myPe = { ...Pe };
    let myIn = { ...In };
    const id='flour';

    myPe.total = myPe.flour + myPe.water + myPe.levain;
    let myHydration = 100 * (myPe.levain * 0.5 + myPe.water) / (myPe.levain * 0.5 + myPe.flour);
    let coef = myIn.total / myPe.total;

    for (let it in myPe) {
      myIn[it] = myPe[it] * coef;
    }
    setPercent(myPe);
    setIngredients(myIn);
    setHydration(myHydration);
    setCoef(coef);

    myIn.id = coef * event.target.value;;
    setIngredients(myIn);
  }
  const dataChangedHandler0 = (event) => {
    let data1=event.target.value*2.0;
    setData1(data1);
  }
  const [ name, setName ] = useState({
    flour: 23,
    water: 12
  });
  const [ name1, setName1 ] = useState({
    flour: 10,
    water:12
  });


const handleChange = (evt) => {
  let data;
  let data1;
  data.flour=evt.target.value;
  data1.flour=evt.target.value*2;
  setName(data); 
  setName1(data1); 
  }

  /*
    const dependency=[Pe.water,Pe.salt,Pe.levain,In.total,In.flour];
  
      useEffect((event) => {
        let myPe={...Pe};
        let myIn={...In};
        
        myPe.total=myPe.flour+myPe.water+myPe.levain;
        let myHydration=100*(myPe.levain*0.5+myPe.water)/(myPe.levain*0.5+myPe.flour);
        let coef=myIn.total/myPe.total;
  
        for(let it in myPe){
          myIn[it]=myPe[it]*coef;
        }
        setPercent(myPe);
        setIngredients(myIn);
        setHydration(myHydration);
        setCoef(coef);
        console.log(myIn.flour);
      },[event]) ;
      */
  return (
    <Aux>
      <Container> <h1> Hello There </h1></Container>
      <Form>
        <FormGroup row>
          <Label for="exampleNumber" sm={2}>Email</Label>
          <Col sm={10}>
          <h1>My name is: {name}</h1>
            <Input type="number" value={name.flour} onChange={handleChange}  />            
            <Input type="number" value={name1.flour}/>            

          </Col>
        </FormGroup>
      </Form>
    </Aux>
  )
}

export default CalcBuilder;