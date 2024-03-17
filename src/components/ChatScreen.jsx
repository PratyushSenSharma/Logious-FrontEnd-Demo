import '../styles/chatScreen.css';
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CgOptions } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5"
import { CgAttachment } from "react-icons/cg";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import db from '../firebase1';
import { doc, getDoc, } from "firebase/firestore";


const ChatScreen = () => {
  const [input, setInput] = useState("")
  const { userId } = useParams();
  const [userName, setUserName] = useState("")
  const [data1, setData] = useState([])

 

  //getting data from fire base to shown  in the chat screen when selected an user in ui
  const getData = async (userId) => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      setUserName(data.username)
      setData(data)
      
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    if (userId) {
      getData(userId);
    }
  }, [userId])
  const sendMessage = (e) => {
    e.preventDefault();
    setInput("")
  }
  console.log(data1.messages)

  return (
    <div className="chatScreen">
      <div className="chat_header">
        <FaUserCircle className="usericon" />

        <div className="chat_headerInfo">
          <h3>{userName}</h3>
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
          
          <p className="chat_name">{}</p>
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
