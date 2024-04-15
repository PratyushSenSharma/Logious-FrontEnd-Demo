import React, { useContext, useEffect } from 'react';
import '../styles/sidebarChat.css';
import { FaUserCircle } from "react-icons/fa";
// import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext'; // Assuming you have a UserContext

const SidebarChat = ({ id, name }) => {
  const { userId, setUserId } = useContext(UserContext);


  // const history = useHistory();

  const handleClick = () => {
    // Set the user id in the context
    setUserId(id);
    console.log("clicked", id);

    // Redirect to the users page
    // history.push(`/users`);
  };

  return (
    <div className='Sidebar_Chat' onClick={handleClick}>
      <FaUserCircle className="usericon" src="" />
      <div className="user_info">
        <h2>{name}</h2>
        <p>Last Message....</p>
      </div>
    </div>
  );
};

export default SidebarChat;
