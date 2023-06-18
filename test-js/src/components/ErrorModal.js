import React from 'react'
import {
    FormFeedback,
    Input
  } from "reactstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  
const ErrorModal = (props) => {
    if(props.invalid){
        console.log(props.invalid);
        return (
    <>
    <Input invalid hidden/>
    <FormFeedback >{props.message}</FormFeedback>
    </>    
  )
    } else{
        return <></>
    }
}

export default ErrorModal