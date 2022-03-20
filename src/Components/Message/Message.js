import React from "react";
import "./Message.css";
import userImage from "./user.jpg";

const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src={userImage} alt="" />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          aspernatur iusto officia?
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
};

export default Message;
