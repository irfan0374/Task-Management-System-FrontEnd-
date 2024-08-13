import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePages from '../Pages/HomePages';
import TaskBoard from '../Pages/TaskDetails';
import SignupPage from '../Component/SignUp';
import { RegisterPage } from '../Pages/Registration';
import LoginPage from '../Component/Login';
import CompleteTask from '../Pages/CompleteTask';
import PendingTask from '../Pages/PendingTask';
import InProgress from '../Pages/Progress';                    
import UserProtect from './privateRoute';                            
import UserPublic from './PublicRoute';

const UserRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<UserPublic><RegisterPage/></UserPublic>} />
        <Route path='/HomePage' element={<UserProtect><HomePages/></UserProtect>} />
        <Route path='/taskDetails' element={<UserProtect><TaskBoard/></UserProtect>} />
        <Route path='/complete' element={<UserProtect><CompleteTask/></UserProtect>} />
        <Route path='/pending' element={<UserProtect><PendingTask/></UserProtect>} />
        <Route path='/progress' element={ <UserProtect><InProgress/></UserProtect>} />
     
    </Routes>
  );
}

export default UserRoutes;
