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
    console.log("abcd", input);
    setInput(""); // Clear the input field after sending message

    // Log the input value

  };

  const sub_data = data1.messages

  const meta_data = {}

  for (var key in sub_data) {
    if (sub_data.hasOwnProperty(key)) {
      var value = sub_data[key];
      console.log("Key: " + key + ", Value: " + value);
      meta_data[key] = value
    }
  }
  let msg = {

  }
  let isSender = ''
  let tms = {
    "full_timestamp": {
      [userName[0]]: '',
      Pratyush: ''
    }
  }
  let preprocess = []
  try {
    // tms = {Pratyush:meta_data.Pratyush.timestamp.toDate().toUTCString().split(" "),
    //           [userName]:meta_data[userName].timestamp.toDate().toUTCString().split(" ")}
    // // meta_data[["timestamp"] = tms[tms.length - 2]]
    let tms_p = meta_data.Pratyush.timestamp
    let msg_p = meta_data.Pratyush.messages
    for (let i = 0; i < tms_p.length; i++) {
      // Your code inside the loop here
      console.log("messages",msg_p[i]);
      if(msg[tms_p[i].toDate()]){
        msg[tms_p[i].toDate()].Pratyush[0].push(msg_p[i])
      }else{
        msg[tms_p[i].toDate()] = {Pratyush:[[msg_p[i]],tms_p[i].toDate().toUTCString()]}
      }
    }
    
    
    console.log("msg",msg)
    const _pdateList = tms_p.map(tms_p => tms_p.toDate());

    let tms_s = meta_data[userName[0]].timestamp
    let msg_s = meta_data[userName[0]].messages
    for (let i = 0; i < tms_s.length; i++) {
      // Your code inside the loop here
      console.log("messages",msg_s[i]);
      if(msg[tms_s[i].toDate()]){
        msg[tms_s[i].toDate()][userName[0]][0].push(msg_s[i])
      }else{
        msg[tms_s[i].toDate()] = {[userName[0]]:[[msg_s[i]],tms_s[i].toDate().toUTCString()]}
      }
    }


    const _sateList = tms_s.map(tms => tms.toDate());

    // merged tms
    const mergedSet = new Set([..._pdateList, ..._sateList]);
    const mergedDates = Array.from(mergedSet).sort((a, b) => a - b);

    let p_time = Date(meta_data.Pratyush.timestamp[0])
    let s_time = Date(meta_data[userName[0]].timestamp[0])
    tms['Pratyush'] = p_time.split(" ")[p_time.split(" ").length - 5]
    tms[userName[0]] = s_time.split(" ")[s_time.split(" ").length - 5]
    tms["full_timestamp"]['Pratyush'] = p_time.replace("(India Standard Time)", '')
    tms["full_timestamp"][userName[0]] = s_time.replace("(India Standard Time)", '')
    // msg = {Pratyush:meta_data.Pratyush.messages,
    //       [userName]:meta_data[userName].messages,}
    // isSender = meta_data.username[1]
    console.log("Hello i am meta Data", _pdateList)
    console.log("tms_s", mergedDates)
    let mappedDATA = mergedDates.map(tms => msg[tms]);
    preprocess = mappedDATA
    console.log("preprocessed",preprocess)


  } catch {
    console.log("error")
  }


  console.log("outloop",preprocess)
  const messageElements = preprocess.map((message, index) => (
    // console.log(Boolean.parseBoolean(Object.keys(message)[0]))

    <div className={`message_body ${((Object.keys(message)[0])==='Pratyush')? 'message_bodySender':''}`}key={index}>
      <p className="chat_name">{(Boolean(Object.keys(message)[0])==='Pratyush')? (Boolean(Object.keys(message)[0])==='Pratyush'):Object.keys(message)[0]}</p>
      <p key={index} className="chat_message">
        {message[Object.keys(message)[0]][0]}
        <span className="chat_Timestamp">{message[Object.keys(message)[0]][1].split(' ')[message[Object.keys(message)[0]][1].split(' ').length-2]}</span>
      </p>
    </div>
  ));



  return (
    <div className="chatScreen">
      <div className="chat_header">
        <FaUserCircle className="usericon" />

        <div className="chat_headerInfo">
          <h3>{userName[0]}</h3>
          <p>Last seen at {tms.full_timestamp[userName[0]]}</p>
        </div>

        <div className="chat_headerRight">
          <IoSearchSharp />
          <CgAttachment />
          <CgOptions />

        </div>


      </div>
      <div className="chat__body">
    
        {messageElements}


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
