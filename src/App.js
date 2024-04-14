import React from 'react';
// import Sidebar from './components/sidebar.jsx'; // Importing the Sidebar component
import "./App.css";
import ChatScreen from './components/ChatScreen.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ForgotPasForm from './components/ForgotPasForm';
import DashBoard from "./components/DashBoard";
import { UserProvider } from './components/UserContext.js';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/users" element={<ChatScreen />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot" element={<ForgotPasForm />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" element={<LoginForm />} />

        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
