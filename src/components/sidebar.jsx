import "../styles/sidebar.css";
import React from 'react'
import { IoSearchSharp } from "react-icons/io5"
import { CgOptions } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { GiRobotHelmet } from "react-icons/gi";
import SidebarChat from "./SidebarChat";

const sidebar = () => {
    return (
        <div className="sidebar_body">
            <div className="sidebar_header">
                <FaUserCircle className="usericon" />
                <div className="sidebar_header_right">
                    <GiRobotHelmet />
                    <CgOptions />
                </div>
            </div>
            <div className="sidebar_search">
                <div className="search_container">
                    <input type="text" placeholder="Search or start a new chat" />
                    <IoSearchSharp />
                </div>

            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default sidebar