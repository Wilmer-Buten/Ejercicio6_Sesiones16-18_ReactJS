import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import React from 'react'
import { User } from "../../models/user.class";
import { ROLES } from "../../models/roles.enum";
import { Navigate, useNavigate } from "react-router-dom";

function RegisterForm() {
    
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = yup.object().shape(
        {
            username: yup.string()
            .min(6, 'Username too short!')
            .max(12, 'Username too long')
            .required('Username is required'),
            
            email: yup.string()
            .required('Email is required'),

            role: yup.string()
            .oneOf(
                [ROLES.USER, ROLES.ADMIN], 'Select a Role!'
            ).required('Role is required'),
            
            password: yup.string()
            .min(6, 'Password too short!')
            .max(12, 'Password too long')
            .required('Password is required'),
           
            confirm: yup.string()
            .when("password", {
                is: value => (value && value.length > 0 ? true : false), 
                then: () => yup.string().oneOf(
                    [yup.ref("password")],
                    "Passwords do not match!"
                )
            }).required('Confirm your password is required')
        }
    )

    return (
    <div>
        <h3>Register Form</h3>
        <Formik
         initialValues={initialValues} 
         validationSchema={registerSchema}
         onSubmit={async (values)=>{
          await new Promise((r) => setTimeout(r, 500));
          alert( JSON.stringify(values, null, 2));
          navigate('/login')
        }}
        >
            {({values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur}) => (
                <Form>
                    <label htmlFor='username'>Username</label>
                    <Field 
                    id='username' 
                    type="text" 
                    name="username" 
                    placeholder='username'/> 

                    {
                        errors.username && touched.username &&
                        (
                            <ErrorMessage name="username" component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor='email'>Email</label>
                    <Field 
                    id='email' 
                    type="email" 
                    name="email" 
                    placeholder='example@gmail.com'/>

                    {
                        errors.email && touched.email &&(
                            <ErrorMessage name="email" component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor='password'>Password</label>
                    <Field 
                    id='password' 
                    type="password" 
                    name="password" 
                    placeholder='password'/> 

                    {
                        errors.password && touched.password &&(
                            <ErrorMessage name="password" component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor='confirm'>Confirm password</label>
                    <Field 
                    id='confirm' 
                    type="password" 
                    name="confirm" 
                    placeholder='Confirm your password'/> 
              
                     {
                        errors.confirm && touched.confirm &&
                        (
                            <ErrorMessage name="confirm" component='div'></ErrorMessage>
                        )
                    }
                    <button type="sumbit">Register</button>
                    {isSubmitting && (<div>Registring...</div>)}
                </Form>
            )
            }
        </Formik>
    </div>
  )
}

export default RegisterForm;