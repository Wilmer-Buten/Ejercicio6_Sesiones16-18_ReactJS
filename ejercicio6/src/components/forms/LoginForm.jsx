import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';


const loginSchema = yup.object().shape(
  {
    email: yup.string().email("Invalid Email format").required("Email is required"),
    password: yup.string().required("Password is required")
  }
);

export default function LoginForm() {

  const navigate = useNavigate();

  const initialCredentials = {
    email: '',
    password: ''
  }

  return (
    <div>
        <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values)=>{
          await new Promise((r) => setTimeout(r, 500));
          alert( JSON.stringify(values, null, 2))
          localStorage.setItem('credentials', values)
          navigate('/tasks')
        }}
        >
        {({values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur}) => (
              <Form>
            <label htmlFor='email'>Email</label>
            <Field id='email' type="email" name="email" placeholder='example@gmail.com'/> 
              {
                errors.email && touched.email && (
                  <ErrorMessage component='div' name='email'></ErrorMessage>
                )
              }
            <label htmlFor='password'>Password</label>
            <Field id="password" type="password" name="password" placeholder="password" />
          
            {
                errors.password && touched.password && (
                  <ErrorMessage component='div' name='password'></ErrorMessage>
                )
              }
          
            <button type='submit'>Submit</button>
            {isSubmitting &&(<p>Logging in...</p>) 
               }
            </Form>  
            )}

        
        </Formik>
    </div>
  )
}
