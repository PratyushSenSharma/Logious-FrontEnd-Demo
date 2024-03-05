import '../styles/chatScreen.css';
import React,{useState} from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CgOptions } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5"
import { CgAttachment } from "react-icons/cg";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";



const ChatScreen = () => {
  const [input,setInput]=useState("")
  const sendMessage = (e) =>{
    e.preventDefault();
  }
  
  return (
    <div className="chatScreen">
      <div className="chat_header">
        <FaUserCircle className="usericon" />

        <div className="chat_headerInfo">
          <h3>User name</h3>
          <p>Last seen at....</p>
        </div>

        <div className="chat_headerRight">
          <IoSearchSharp />
          <CgAttachment />
          <CgOptions />

        </div>


      </div>
      <div className="chat__body">
        <div className={`message_body ${true && 'message_bodySender'}`}>
          <p className="chat_name">Anirban </p>
          <p className="chat_message"> Hey Guyz <span className="chat_Timestamp">11:39am</span></p>
        </div>
        
        



      </div>
      <div className="chat_footer">
        <MdOutlineEmojiEmotions className='emoji' />
        <form>
          <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message...' />
          <button type='submit' onClick={sendMessage}>Send a Message</button>
        </form>
        <FaMicrophoneAlt className='mic' />

      </div>
    </div>
  )
}

export default ChatScreen
