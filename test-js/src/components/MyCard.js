import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useRef } from "react";
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardText,
  CardHeader,
  CardTitle,
  Input,
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  InputGroup,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyCard = () => {
  return (
    <>

      <Card
        className="my-4 px-5"
        color="primary"
        outline
        // style={{
        //     width: '60rem'
        // }}      
      >
        <CardHeader className="px-8 my-8">Morgage Calculator</CardHeader>
        <CardBody>
          <FormGroup>
            <Form>
                <Row>
                  <Col >
                    <FormGroup>
                      <Label for="totalSum">Borrowed</Label>
                      <Input
                        id="totalSum"
                        name="sum"
                        placeholder="Total Sum"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col >
                    <FormGroup>
                      <Label for="interestRate">Interest Rate</Label>
                      <Input
                        id="interestRate"
                        name="rate"
                        placeholder="Interest Rate"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col >
                    <FormGroup>
                      <Label for="numberYears">Number of Years</Label>
                      <Input
                        id="numberYears"
                        name="years"
                        placeholder="Number of Years"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                </Row>

              <FormGroup>
                <Label for="myResult">Result</Label>
                <Input
                  id="myResult"
                  name="result"
                  type="number"
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
              <Button>Sign in</Button>
            </Form>
          </FormGroup>

        </CardBody>
      </Card>

    </>
  );
};

export default MyCard;
