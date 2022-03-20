import React from "react";
import ChatOnline from "../../Components/ChatOnline/ChatOnline";
import Conversation from "../../Components/Conversation/Conversation";
import Message from "../../Components/Message/Message";
import "./ChatApp.css";

const ChatApp = () => {
  return (
    <div className="chatApp">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <h2>Employees</h2>
          <input className="chatMenuInput" placeholder="Search for employees" />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message />
            <Message own={true} />
            <Message />
            <Message own={true} />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
          </div>
          <div className="chatBoxBottom">
            <textarea
              className="chatMessageInput"
              placeholder="Write Something..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="chatMessageSubmit">Send</button>
          </div>
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <h2>Online</h2>
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
