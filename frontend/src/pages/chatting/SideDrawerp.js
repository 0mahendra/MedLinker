import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Mychats from "./Mychats";
import axios from "axios";

const SideDrawerp = ({sender})=>{
   let user = JSON.parse(localStorage.getItem("userInfo"));
 
   localStorage.setItem("sender",sender);
    const [chats, setChats] = useState([]);
    const userId = user._id;
    const usertype = sender;

    // const sendDataToParent = () => {
    //   const data = true;
    //   onData(data); // Call the function passed from the parent with the data
    // };
    
    const fetchChatsForUser = async () => {
        try {
          // console.log("this is user id" ,userId);
          const response = await axios.post('/api/chats/fetch',{userId, usertype});
          return response.data; // Return the array of chats
          // console.log(data);
          console.log(response.data);
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
           <>
               <Box bgColor={"#2a3970"}  p={4} w="400px" borderRadius={"10px"} height={"100vh"} overflowY={"scroll"}  >
      <Text  fontFamily={"Work sans"} fontSize={"35px"} textAlign={"center"} borderBottomWidth={"4px"} color={"white"}> My Chats</Text>
      <VStack align="flex-start" spacing={7}>
        {chats.map((chat,i)=> (    
            <Box key={i} width={"180px"}>
             <Mychats chat = {chat} />

             </Box>
        ))}
      </VStack>
    </Box>
           </>
    )
}
export default SideDrawerp;