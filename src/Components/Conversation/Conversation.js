import React from "react";
import "./Conversation.css";
import ConversationImage from "./avatar.png";

const Conversation = () => {
  return (
    <div className="conversation">
      <img className="conversationImg" src={ConversationImage} alt="" />
      <span className="conversationName">John Doe</span>
    </div>
  );
};

export default Conversation;
