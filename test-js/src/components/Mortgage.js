import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useRef } from "react";
import ErrorModal from "./ErrorModal";
import {
  Col,
  Row,
  Card,
  Input,
  Button,
  Form,
  FormGroup,
  Label,
  InputGroup,
  CardBody,
  CardHeader
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Mortgage = (props) => {
    const [total,setTotal]=useState(null);
    const [interest,setInterest]=useState(null);
    const [years,setYears]=useState(null);
    const [monthly,setMonthly]=useState(null);
    const errorDefault={
        invalid: false,
        message: ""
    }
    const [errors,setErrors]=useState(errorDefault);

    const totalHandler= (e) =>{
        const value=e.target.value;        
        setTotal(value);
        setErrors(errorDefault);
        if(+value < 0) {
            setErrors(
                {
                    message: "Borrowed money cannot be negative",
                    invalid: true
                }
            )
        }
    }
    const interestlHandler= (e) =>{
        let value=e.target.value;
        setInterest(value)
        setErrors(errorDefault);
        if(+value < 0) {
            setErrors(
                {
                    message: "Interest rate cannot be negative",
                    invalid: true
                }
            )
        }

    }
    const yearsHandler= (e) =>{
        let value=e.target.value;
        setYears(value)
        setErrors(errorDefault);
        if(+value < 0) {
            setErrors(
                {
                    message: "Number of Years cannot be negative",
                    invalid: true
                }
            )
        }
    }
    const submitHandler= () =>{
        const P=total;
        const N=years*12;
        const r0=interest;
        if(N === 0) {
            setMonthly("Error");
        } else {
            if(r0 === 0) {
                setMonthly(P/N);
            } else{
                const r=r0/12.0/100.0;
                const fact=(1+r)**N;
                const result=r*P*fact/(fact-1);
                setMonthly(Number(result).toFixed(2));        
            }
        }
        
    }
  return (
    <>
      <div>
        <br />
      </div>
      <Card
        className="my-4 py-2 px-5"
        color="primary"
        outline
        // style={{
        //     width: '60rem'
        // }}      
      >
        <CardHeader className="text-center">An Unpretentious Morgage Calculator</CardHeader>
        <CardBody>
      
      <FormGroup>
      <Form>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="totalSum">Borrowed</Label>
              <Input
                id="totalSum"
                name="sum"
                placeholder="Total Sum"
                type="number"
                onChange={totalHandler}
                step="any"
                min="0"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="interestRate">Interest Rate</Label>
              <Input
                id="interestRate"
                name="rate"
                placeholder="Interest Rate"
                type="number"
                onChange={interestlHandler}
                step="any"
              />
              
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="numberYears">Number of Years</Label>
              <Input
                id="numberYears"
                name="years"
                placeholder="Number of Years"
                type="number"
                onChange={yearsHandler}
                step="1"
                min="1"
              />
            </FormGroup>
          </Col>
            <ErrorModal invalid={errors.invalid} message={errors.message} />
        </Row>
        <FormGroup>
          <Label for="monthlyPayment">Monthly Payment</Label>
          <Input
            id="monthlyPayment"
            name="payment"
            type="number"
            defaultValue={monthly}
            readOnly={false}
          />
        </FormGroup>

        <FormGroup check>
          <Input
            id="exampleCheck"
            name="check"
            type="checkbox"
          />
          <Label
            check
            for="exampleCheck"
          >
            Check me out
          </Label>
        </FormGroup>
        <Button onClick={submitHandler}>Calculate</Button>
      </Form>
      </FormGroup>
      </CardBody>
      </Card>
    </>
  );
};

export default Mortgage;
