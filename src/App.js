import React from 'react'
import Sidebar from './components/sidebar.jsx';
import "./App.css";
import ChatScreen from './components/ChatScreen.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ForgotPasForm from './components/ForgotPasForm';
import DashBoard from "./components/DashBoard";

function App() {
  return (
    
   
        <Router>

          
          <Routes>
          <div className='chat'>
            <div className="chat_body">
            <Sidebar />
            
            <Route path='/users/:userId' element={<ChatScreen />} />
              </div>
              
              </div>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot" element={<ForgotPasForm />} />


            
            <Route path='/' element={<LoginForm />} />


          </Routes>
        </Router>


      
    
  );
}

export default App;
