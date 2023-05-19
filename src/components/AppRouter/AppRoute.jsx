import React,{useContext} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Chat from '../Chat/Chat';
import Login from '../Login/Login';
import { userContext } from "../../context";
const AppRoute = () => {
    
    const {isUser} = useContext(userContext)
    return isUser ?
    (
      <Routes>
        <Route index path={'/chat'} element={<Chat />} />
        <Route path={'*'} element={<Navigate to={'/chat'} replace/>} />
      </Routes>
    )
    :
    (
      <Routes>
        <Route index path={'/login'} element={<Login />} />
        <Route path={'*'} element={<Navigate to={'/login'} replace/>} />
      </Routes>
    )
};

export default AppRoute;