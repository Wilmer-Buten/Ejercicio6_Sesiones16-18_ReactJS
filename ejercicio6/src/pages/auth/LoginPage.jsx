import React from 'react'
import LoginForm from '../../components/forms/LoginForm';
import Navbar from '../../components/pure/Navbar';

function LoginPage() {
  return (
    <div>
        <Navbar></Navbar>
      <div>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage;