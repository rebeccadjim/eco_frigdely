import React, { useState } from "react";
import { link } from "react-router-dom";
import './Message.css';
import { useParams } from "react-router-dom";

const Message=()=>{
    return(
        <div className="message owner">
            <div className="messageInfo owner">
                <img src='https://tse4.mm.bing.net/th?id=OIP.KE_4sXBufUHGVvJTRXe8FQAAAA&pid=Api' alt=""></img>
                <div className="messageContent">
                    <p className="message-content">Message</p>
                </div>
            </div>
        </div>
    );
}

export default Message;