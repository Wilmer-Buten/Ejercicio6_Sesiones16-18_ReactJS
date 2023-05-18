import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage'
import HomePage from './pages/home/HomePage';
import TasksPage from './pages/tasks/TasksPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import ProtectedRoute from './pages/auth/ProtectedRoute';

const App = () =>{
  return (
     <div className='App-header'>
         <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomePage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage />} />        
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<ProtectedRoute></ProtectedRoute> }>
            <Route path='/tasks' element={ <TasksPage></TasksPage>} />
            <Route path='/dashboard' element={ <DashboardPage/> } />
          </Route>

        </Routes>
      </BrowserRouter>

     </div>
  );
}

export default App;
