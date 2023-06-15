import ReactDOM from 'react-dom/client';
import { useState, useRef } from "react";
import {
  Col,
  Row,
  Container,
  Input,
  Button,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

import "./MyTest.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MyTest = () => {
  const valueRef = useRef(null);
  const textRef = useRef(null);
  const [result,setResult]=useState("");
  const handleClick = () => {
    console.log(valueRef.current.value);
    console.log(textRef.current.value);
    const searchText = textRef.current.value;
    const pattern = valueRef.current.value;
    const regex = new RegExp(pattern, 'g');
    let highlightedResult = "<pre>";
    let startPosition = 0;
    let endPosition = 0;

    // Find each match, and build the result
    const matches = searchText.matchAll(regex);
    for (const match of matches) {
        endPosition = match.index;

        // Get all of the string up to the match, and concatenate
        highlightedResult += searchText.slice(startPosition, endPosition);

        // Add matched text, using a CSS class for formatting
        highlightedResult += "<span class='found'>" + match[0] + "</span>";
        startPosition = endPosition + match[0].length;
    }

    // Finish off the result string
    highlightedResult += searchText.slice(startPosition);
    highlightedResult += "</pre>";
    setResult(highlightedResult);
//    document.getElementById("myresult").innerHTML = highlightedResult;
  };

  return (
    <div>
      <Form>
        <h1>Finding All Instances of a Pattern</h1>
        <textarea ref={textRef} />
        <p>
          <Input
            type="text"
            innerRef={valueRef}
          >
            Input
          </Input>
        </p>

        <Button onClick={handleClick}>Search for pattern</Button>
      </Form>
       <div dangerouslySetInnerHTML={{__html: result}}></div>
    </div>
    
  );
};

export default MyTest;
