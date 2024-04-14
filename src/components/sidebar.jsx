import "../styles/sidebar.css";
import React, { useEffect, useState,useContext } from 'react';
import { IoSearchSharp } from "react-icons/io5"
import { CgOptions } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { GiRobotHelmet } from "react-icons/gi";
import { PiUserCirclePlusFill } from "react-icons/pi";
import SidebarChat from "./SidebarChat";
import db from '../firebase1';
import {  onSnapshot, collection, query,where } from "firebase/firestore";
import { addDoc } from "firebase/firestore"; 
import { UserContext } from "./UserContext";


const Sidebar = () => {
  
  const { userId, setUserId} = useContext(UserContext);
    const createChat = async () => {
        const userName = prompt("Please Enter User Name");
        console.log("User name entered:", userName);
        if (userName) {
    
          const docRef = await addDoc(collection(db, "users"),
           {
            username: [userName,"Pratyush"],//first arg recipient 2nd arg logged in user
            messages:{Pratyush:
              {
                messages:["hi"],
                timestamp:[new Date()],
              },[userName]:
              {
                messages:["hi"],
                timestamp:[new Date()],
              }
            }

          });
          // console.log("Document written with ID: './SidebarChat.jsx' ", docRef.id);
    
        }
      };
    const [users,setUsers]= useState([])
    useEffect(() => {
      if(userId!==null){
        const q = query(collection(db, "users"),where("id", "in", userId))
        const unsub = onSnapshot(q, (querySnapshot) => {
          setUsers(querySnapshot.docs.map(d => ({
            id:d.id,
            data:d.data(),
          })))
        });
        return()=>{
            unsub();
        }
      }
        
      }, [])
    return (
        <div className="sidebar_body">
            <div className="sidebar_header">
                <FaUserCircle className="usericon" />
                <div className="sidebar_header_right">
                    <GiRobotHelmet />
                    <CgOptions />
                    <PiUserCirclePlusFill className="adduser" onClick={createChat}/>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="search_container">
                    <input type="text" placeholder="Search or start a new chat" />
                    <IoSearchSharp />
                </div>

            </div>
            <div className="sidebar_chats">
                    {users.map(user=>(
                        <SidebarChat key={user.id} id={user.id} name={user.data.username[0]} />
                    ))}
            </div>
        </div>
    )
}

export default Sidebar