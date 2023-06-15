import { useState, useRef} from 'react';
import { Col, Row, Container, Input, Button, Form, FormGroup, Label} from 'reactstrap';

import './MyTest.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const MyTest=() =>{
    const valueRef=useRef("");
    const handleClick= () =>{
        console.log(valueRef.current.value);
    }
    
return (
<div>
      <Input
         innerRef={valueRef}
         type="text"
         id="message"
       />
        <Button onClick={handleClick}>Search for pattern</Button>    
</div>
);

}

export default MyTest;