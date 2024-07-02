import React from "react";
import { createContext, useContext, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
const ChatContext = createContext();

const ChatProvider = ({children})=>{
    // const [user,setUser] = useState();
    const[selectedChat,setSelectedChat] =useState();
    const [chats,setChats] =useState([]);
    const history =useHistory();
     
   
    return (
        <ChatContext.Provider value={{selectedChat,setSelectedChat,chats,setChats}}>
            {children}
        </ChatContext.Provider>
    );
};

export const ChatState = ()=>{
  return useContext(ChatContext);
  
};



export default ChatProvider;