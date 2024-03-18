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
      console.log("Document data:", docSnap);
      const data = docSnap.data();
      setUserName(data.username)
      setData(data)
      console.log("AWFAWF", data)
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
    console.log("abcd",input);
    setInput(""); // Clear the input field after sending message
     
     // Log the input value
    
  };

  const sub_data = data1.messages
  try {

    sub_data = data1.messages;
  } catch {
    console.log("error")
  }
const meta_data = {

    
  }

  for (var key in sub_data) {
    if (sub_data.hasOwnProperty(key)) {
      var value = sub_data[key];
      console.log("Key: " + key + ", Value: " + value);
      meta_data[key] = value
    }
  }
  let msg = {
   
  }
  let isSender=''
let tms={"full_timestamp":{
  [userName[0]]:'',
  Pratyush:''
}}
  try {
    // tms = {Pratyush:meta_data.Pratyush.timestamp.toDate().toUTCString().split(" "),
    //           [userName]:meta_data[userName].timestamp.toDate().toUTCString().split(" ")}
    // // meta_data[["timestamp"] = tms[tms.length - 2]]
    tms['Pratyush'] =meta_data.Pratyush.timestamp.toDate().toUTCString().split(" ")
    tms[userName]=meta_data[userName].timestamp.toDate().toUTCString().split(" ")
    tms["full_timestamp"]['Pratyush'] =meta_data.Pratyush.timestamp.toDate().toUTCString()
    tms["full_timestamp"][userName]=meta_data[userName].timestamp.toDate().toUTCString()
    // msg = {Pratyush:meta_data.Pratyush.messages,
    //       [userName]:meta_data[userName].messages,}
    // isSender = meta_data.username[1]
    console.log("Hello i am meta Data",tms)

  } catch {
    console.log("error")
  }
  
  
  console.log(meta_data)
  // const messageElements = msg.map((message, index) => (
  
  //   <div className={`message_body ${isSender? 'message_bodySender':''}`}key={index}>
  //     <p className="chat_name">{isSender? isSender:data1.username[0]}</p>
  //     <p key={index} className="chat_message">
  //       {message}
  //       <span className="chat_Timestamp">{meta_data.timestamp}</span>
  //     </p>
  //   </div>
  // ));



  return (
    <div className="chatScreen">
      <div className="chat_header">
        <FaUserCircle className="usericon" />

        <div className="chat_headerInfo">
          <h3>{userName[0]}</h3>
          <p>Last seen at {tms.full_timestamp[userName]}</p>
        </div>

        <div className="chat_headerRight">
          <IoSearchSharp />
          <CgAttachment />
          <CgOptions />

        </div>


      </div>
      <div className="chat__body">

       
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
