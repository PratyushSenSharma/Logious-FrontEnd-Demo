import React from 'react'
import '../styles/sidebarChat.css';
import { FaUserCircle } from "react-icons/fa";
import {Link} from 'react-router-dom';
const SidebarChat = ({id,name }) => {

  return(
    <Link to={`/users`}>
    <div className='Sidebar_Chat'>
        <FaUserCircle className="usericon" src=""/>
        <div className="user_info">
            <h2>{name}</h2>
            <p>Last Message....</p>

        </div>
    </div>
    </Link>
  )
}

export default SidebarChat