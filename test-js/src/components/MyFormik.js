import React from 'react'

import { Formik, Field, Form} from 'formik';
function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

function validateYears(value){
  let error;
  if(value < 0){
    error='Must be a positive number'
  }
  return error;
}


const MyFormik = () => {
  return (
    <>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         username: '',
         email: '',
       }}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched, isValidating }) => (
         <Form>


           <Field name="email" validate={validateEmail} />
           {errors.email && touched.email && <div>{errors.email}</div>}
 
           <Field name="username" validate={validateUsername} />
           {errors.username && touched.username && <div>{errors.username}</div>}

           <Field name="years" validate={validateYears} />
           {errors.years && touched.years && <div>{errors.years}</div>}
 
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    
    </>
  )
}




export default MyFormik