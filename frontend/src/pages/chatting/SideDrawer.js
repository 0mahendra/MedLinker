import React, { useState, useEffect } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
// import fetchChatsForUser from './fetchChatsForUser';

import axios from 'axios';
import Mychats from './Mychats';

const SideDrawer = ({sender}) => {
   localStorage.setItem("sender" , sender);
  let user;
   if(sender === "doctor"){
    user = JSON.parse(localStorage.getItem("dctrInfo"));
   }
   else{
    user = JSON.parse(localStorage.getItem("userInfo"));
   }
  //  console.log(user);
  const [chats, setChats] = useState([]);
   const userId = user._id;
   const usertype = sender;
   const[loggedUser ,setLoggerdUser] = useState();
   
   const token = localStorage.getItem("token");
const fetchChatsForUser = async () => {
  try {
    
    const config = {
      headers: {
        "Content-Type": "application/json", 
        Authorization: `Bearer ${token}`, 
      },
    };
    const response = await axios.post('/api/chats/fetch',{userId, usertype} ,config);
    return response.data; // Return the array of chats
    // console.log(data);
    // console.log(response.data);
  } catch (error) {
    console.error('Error fetching chats:', error);
    throw error;
  }
};




  useEffect(() => {
    // Fetch chats for the current user
    const fetchChats = async () => {
      try {
        const chats = await fetchChatsForUser();
        setChats(chats);
        // console.log(chats);

        
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []);

 

  return (
    <Box bgColor={"#2a3970"}  p={4} w="400px" borderRadius={"10px"} height={"100vh"} overflowY={"scroll"} >
      <Text  fontFamily={"Work sans"} fontSize={"30px"} textAlign={"center"} borderBottomWidth={"4px"} color={"white"}> My Chats</Text>
      <VStack align="flex-start" spacing={7}>
        {chats.map((chat,i)=> (    
            <Box key={i} width={"180px"}>
             <Mychats chat = {chat} />

             </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default SideDrawer;
