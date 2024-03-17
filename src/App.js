import React from 'react'
import Sidebar from './components/sidebar.jsx';
import "./App.css";
import ChatScreen from './components/ChatScreen.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='chat'>
      <div className="chat_body">
        <Router>
          <Sidebar/>
          <Routes>
            <Route path='/users/:userId'element={<ChatScreen/>}/>
            <Route path='/' element={<ChatScreen/>} />

          </Routes>
        </Router>


      </div>

    </div>
  );
}

export default App;
