import React, { useState, useEffect } from 'react';
import { Box, FormControl, Input, Spinner, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import ChatLoading from './ChatLoading';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
// import { response } from 'express';

const ChatBox = () => {

  
 
  const [messages, setMessages] = useState([]);
  // const [reversedEntries ,setReversedEntries]  = useState([]);
  const[loading ,setLoading] = useState(false);
  const[chatId,setChatId] = useState();
  // const[chaton,setChaton] =useState(false);
  const [showFirst, setShowFirst] = useState(true);
  const [data ,setData] =useState();
  const [newmsg ,setNewmsg] = useState();
  const [psValue,setPsValue] = useState("enter your message");
  // const[chaton,setChaton] =useState(false);
  // let chatId1;
  //   localStorage.removeItem("chaton");
  //  console.log(chatId);
  //   if(chaton1 === true)setChaton(true);
  // let data1;
  let chatId1 =  JSON.parse(localStorage.getItem("chatId"));
  let sender = localStorage.getItem("sender");
  console.log(sender);
    

     const sendMessage = async()=>{
    
      const content = newmsg;
      const chatId = chatId1;

      try{
           
        const messages = await axios.post(`/api/messages/chatId/send`, {chatId,sender,content});
        // const data = await messages
        console.log(messages);
      
        // history.push("/ChatBox");
         
        
     }catch(eror){
        console.log(eror);
     }
    
     setNewmsg('');
     setPsValue('enter the new msg');
     
     }

    
    const fetchMessages = async (chatId) => {
      try {
        console.log(chatId);
        const response = await axios.post('/api/messages/chatId/fetch' ,{chatId}); // Replace with your API endpoint
        setMessages(response.data); // Update state with fetched messages
        // setReversedEntries(Array.from(response.data.entries()).reverse());
      
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        sendMessage();
        fetchMessages();
      }
    };
   
    
  useEffect(() => {
    
    //  console.log(chatId1 );
      // setChatId(chatId1);
      // console.log(chatId);
      fetchMessages(chatId1);

        
      // setMessages(reversedEntries);
      // console.log(reversedEntries);
          
    const timer = setTimeout(() => {
      setShowFirst(false); 
    }, 3000);

   

    return () => clearTimeout(timer);
  }, []);

  // console.log(data1); 

 

  return (

    <>
    {sender === "patient" ? ( 
      <Box bg="white" p={4} w="100%" h="100vh" overflowY="auto " borderRadius={"10px"} alignItems={"center"} justifyContent={"center"} >
      <Text fontWeight="bold" mb={2}>Chat User</Text>
      <VStack align="flex-end" spacing={2}>
       

        {loading ?(
          <Box height={"100vh"} width={"100%"} display={"flex"} alignItems={"center"}  bgColor={"red"} flexDirection={"column"}>
              <Spinner
                size={"xl"}
                w={20}
                h={20}
                alignSelf={"center"}
                margin={"auto"}
              />

              <Text fontFamily={"Work sans"} fontSize={"30px"}> click on chat to start chat</Text>

               </Box>

            ):(
              <Box height={"90vh"} width={"100%"} display={"flex"}  bgColor={"purple"} flexDirection={"column"}>
      <Box overflowY={"auto"} flex={"1"} display={"flex"}  flexDirection={"column-reverse"}>{/* Make the message container scrollable */}
        {messages.slice(0).reverse().map(message => (
           
          message.sender === "doctor" ? (<Text key={message.id}  marginBottom={"8px"} fontFamily={"Work sans"} fontSize={"20px"} marginRight={"10px"} textAlign={"right"} > <span style={{ borderRadius:"10px" , margin:"10px" }}>
    {message.content}
  </span>
  <span style={{ fontSize: "12px", color: "#999" }}>
    {message.timestamp[11]}
    {message.timestamp[12]}
    {message.timestamp[13]}
    {message.timestamp[14]}
    {message.timestamp[15]} {/* Assuming message.timestamp contains the timestamp */}
  </span></Text>
           
           ) :(
          <Text key={message.id} marginBottom={"8px"} fontFamily={"Work sans"} fontSize={"20px"} marginRight={"10px"} textAlign={"left"} > <span style={{borderRadius:"10px", margin:"10px"}}>
    {message.content}
  </span>
  <span style={{ fontSize: "12px", color: "#999" }}>
    {message.timestamp[11]}
    {message.timestamp[12]}
    {message.timestamp[13]}
    {message.timestamp[14]}
    {message.timestamp[15]} {/* Assuming message.timestamp contains the timestamp */}
  </span></Text>)
        ))}
      </Box>
      <FormControl isRequired mt={3}>
        <Input
          variant={"solid"}
          bg={"#E0E0E0"}
          placeholder={`${psValue}`}
          // onChange={typingHandler}
          value={newmsg}

          onChange={(e)=>setNewmsg(e.target.value)}
          onKeyDown={handleKeyDown} 

        />
      </FormControl>
    </Box>
            )}
      </VStack>

    </Box>
      
      
      ):(

    (showFirst ? (
      <ChatLoading />
          
    ) : (
      <>
      <Box bg="white" p={4} w="100%" h="100vh" overflowY="auto " borderRadius={"10px"} alignItems={"center"} justifyContent={"center"} >
      <Text fontWeight="bold" mb={2}>Chat Dctr</Text>
      <VStack align="flex-end" spacing={2}>
       

        {loading ?(
          <Box height={"100vh"} width={"100%"} display={"flex"} alignItems={"center"}  bgColor={"red"} flexDirection={"column"}>
              <Spinner
                size={"xl"}
                w={20}
                h={20}
                alignSelf={"center"}
                margin={"auto"}
              />

              <Text fontFamily={"Work sans"} fontSize={"30px"}> click on chat to start chat</Text>

               </Box>

            ):(
              <Box height={"90vh"} width={"100%"} display={"flex"}   flexDirection={"column"}>
      <Box overflowY={"auto"} flex={"1"} display={"flex"}  flexDirection={"column-reverse"}>{/* Make the message container scrollable */}
        {messages.slice(0).reverse().map(message => (
          message.sender === "doctor" ? (<Text key={message.id}  marginBottom={"8px"}  fontFamily={"Work sans"} fontSize={"20px"} marginRight={"10px"} textAlign={"right"} ><span style={{borderRadius:"10px" ,margin:"10px" }}>
    {message.content}
  </span>
  <span style={{ fontSize: "12px", color: "#999" }}>
    {message.timestamp[11]}
    {message.timestamp[12]}
    {message.timestamp[13]}
    {message.timestamp[14]}
    {message.timestamp[15]} {/* Assuming message.timestamp contains the timestamp */}
  </span></Text>
          ) :(
          <Text key={message.id}  marginBottom={"8px"} fontFamily={"Work sans"} fontSize={"20px"} marginRight={"10px"} textAlign={"left"} > <span style={{borderRadius:"10px" ,margin:"10px" }}>
    {message.content}
  </span> 
  <span style={{ fontSize: "12px", color: "#999" }}>
    {message.timestamp[11]}
    {message.timestamp[12]}
    {message.timestamp[13]}
    {message.timestamp[14]}
    {message.timestamp[15]}
     {/* Assuming message.timestamp contains the timestamp */}
  </span></Text>)
        ))}
      </Box>
      <FormControl isRequired mt={3}>
        <Input
          variant={"solid"}
          bg={"#E0E0E0"}
          placeholder={`${psValue}`}
          // onChange={typingHandler}
          value={newmsg}

          onChange={(e)=>setNewmsg(e.target.value)}
          onKeyDown={handleKeyDown} 

        />
      </FormControl>
    </Box>
            )}
      </VStack>

    </Box>
        
      </>
    ))
    )
    }
  </>
  );
};

export default ChatBox;
