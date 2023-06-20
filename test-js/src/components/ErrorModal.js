import React from 'react'
import {Alert} from "reactstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  
const ErrorModal = (props) => {
    if(props.invalid){
        console.log(props.invalid);
        return (
    <>
    <Alert color="danger">{props.message}</Alert>
    </>    
  )
    } else{
        return <></>
    }
}

export default ErrorModal