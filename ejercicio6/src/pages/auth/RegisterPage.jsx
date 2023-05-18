import React from 'react'
import RegisterForm from '../../components/forms/RegisterForm';
import Navbar from '../../components/pure/Navbar';

function RegisterPage() {
  return (
    <div>
        <Navbar></Navbar>
        <div>
            <RegisterForm></RegisterForm>
        </div>
    </div>
    )
}

export default RegisterPage;