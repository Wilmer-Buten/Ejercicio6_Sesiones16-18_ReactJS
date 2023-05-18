import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {

  const user = localStorage.getItem('credentials');
  
  if(user === null){
    alert('You must be logged in. Redirecting...');
    return <Navigate to="/home"></Navigate>
  }

  return <Outlet/>
}

export default ProtectedRoute;