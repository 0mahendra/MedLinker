import React, { useState, useEffect, useRef } from 'react';
import { Avatar, Box, FormControl, Input, Spinner, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import ChatLoading from './ChatLoading';
import { useLocation } from 'react-router-dom';
import Navbarp from '../patPages/Navbarp';
import Navbard from '../dctrPages/Navbard';
import io from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:5000"; // Backend endpoint for Socket.io
const socket = io.connect(ENDPOINT); // Establish the connection to Socket.io

const ChatBox = () => {
  const boxRef = useRef(null);
  const location = useLocation();
  const token = localStorage.getItem("token");
  const { loggedUser } = location.state;

  const [messages, setMessages] = useState([]);
  const [sendMessages, setSendMessages] = useState([]); // Updated variable name for clarity
  const [loading, setLoading] = useState(true);
  const [newMsg, setNewMsg] = useState('');
  const [psValue, setPsValue] = useState("Enter your message");

  const chatId1 = JSON.parse(localStorage.getItem("chatId"));
  const sender = localStorage.getItem("sender");
  const user = sender === "doctor" ? JSON.parse(localStorage.getItem("dctrInfo")) : JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    fetchMessages(chatId1);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Listening for incoming messages
    socket.on("receive_msg", (data) => {
      console.log("Message received:", data); // Log the received message
      const { content, sender } = data;
      setMessages(prevMessages => [...prevMessages, content]);
      setSendMessages(prevSendMessages => [...prevSendMessages, sender]);
    });

    return () => {
      socket.off("receive_msg"); // Cleanup the listener when the component unmounts
    };
  }, []);

  const sendMessage = async () => {
    const content = newMsg.trim(); // Trim whitespace from the message
    if (!content) return; // Prevent sending empty messages

    // Emit the message to the server via Socket.io
    socket.emit("send_message", { content, chatId: chatId1, sender });

    // Save the message to the database
    try {
      const config = {
        headers: {
          "Content-Type": "application/json", 
          Authorization: `Bearer ${token}`, 
        },
      };
      await axios.post(`/api/messages/chatId/send`, { chatId: chatId1, sender, content } , config);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setNewMsg(''); // Clear the input field
    setPsValue('Enter your message'); // Reset placeholder text
  }

  const fetchMessages = async (chatId) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json", 
          Authorization: `Bearer ${token}`, 
        },
      };
      const response = await axios.post('/api/messages/chatId/fetch', { chatId }, config);
      const newMessages = response.data.map(data => data.content);
      const newSendMessages = response.data.map(data => data.sender);
      setMessages(prevMessages => [...prevMessages, ...newMessages]);
      setSendMessages(prevSendMessages => [...prevSendMessages, ...newSendMessages]);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const scrollToBottom = () => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom(); // Automatically scroll to the bottom when messages change
  }, [messages]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage(); // Send message on Enter key
    }
  };

  return (
    <>
      {sender === "patient" ? (
        <Box display={"flex"} flexDirection={"row"}>
          <Box width="5%">
            <Navbarp />
          </Box>
          <Box width={"95%"}>
            <Box bgColor="white" p={4} w="100%" h="100vh" overflowY="auto" borderRadius={"10px"} alignItems={"center"}>
              <Text fontWeight="bold" mb={2} textAlign={"center"} fontFamily={"Work sans"} borderBottomWidth={"2px"} fontSize={"30px"}>
                {loggedUser.name}
              </Text>
              <VStack align="flex-start" spacing={10}>
                {loading ? (
                  <Box height={"100vh"} width={"98%"} display={"flex"} alignItems={"center"} bgColor={"white"} flexDirection={"column"}>
                    <Spinner size={"xl"} w={20} h={20} alignSelf={"center"} margin={"auto"} />
                    <Text fontFamily={"Work sans"} fontSize={"30px"}>Click on chat to start chat</Text>
                  </Box>
                ) : (
                  <Box height={"89vh"} width={"100%"} display={"flex"} flexDirection={"column"}>
                    <Box ref={boxRef} overflowY={"auto"} height={"90vh"} flex={"1"} display={"flex"} flexDirection={"column"} bgColor={'#342d38'}>
                      {messages.map((message, i) => (
                        <Box key={i} display="flex" flexDirection={sendMessages[i] === "doctor" ? "row" : "row-reverse"} marginY={1}>
                          <Avatar name={sendMessages[i]} size="sm" marginRight={2} />
                          <Text fontFamily={"Work sans"} fontSize={"20px"} textAlign={sendMessages[i] === "doctor" ? "left" : "right"}>
                            <span style={{
                              backgroundColor: sendMessages[i] === "doctor" ? "#BEE3F8" : "#B9F5D0",
                              color: "black",
                              borderRadius: "20px",
                              padding: "10px 15px",
                              maxWidth: "75%",
                              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            }}>
                              {message}
                            </span>
                          </Text>
                        </Box>
                      ))}
                    </Box>
                    <FormControl isRequired mt={3}>
                      <Input
                        variant={"outline"}
                        bg={"#E0E0E0"}
                        placeholder={psValue}
                        value={newMsg}
                        onChange={(e) => setNewMsg(e.target.value)}
                        onKeyDown={handleKeyDown}
                        borderRadius="20px"
                        _focus={{ borderColor: "teal.400" }} // Change border color on focus
                        _placeholder={{ color: "gray.500" }} // Placeholder color
                      />
                    </FormControl>
                  </Box>
                )}
              </VStack>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box display={"flex"} flexDirection={"row"}>
          <Box width={"5%"}>
            <Navbard />
          </Box>
          <Box bg="white" p={4} w="100%" h="100vh" overflowY="auto" borderRadius={"10px"} alignItems={"center"} bgColor={'lightblue'}>
            <Text borderBottomWidth={"2px"} fontWeight="bold" mb={2} textAlign={"center"} fontSize={"30px"}>
              {loggedUser.name}
            </Text>
            <VStack align="flex-start" spacing={2}>
              {loading ? (
                <Box height={"100vh"} width={"98%"} display={"flex"} alignItems={"center"} bgColor={"white"} flexDirection={"column"}>
                  <Spinner size={"xl"} w={20} h={20} alignSelf={"center"} margin={"auto"} />
                  <Text fontFamily={"Work sans"} fontSize={"30px"}>Click on chat to start chat</Text>
                </Box>
              ) : (
                <Box height={"89vh"} width={"100%"} display={"flex"} flexDirection={"column"}>
                  <Box ref={boxRef} overflowY={"auto"} height={"90vh"} flex={"1"} display={"flex"} flexDirection={"column"} bgColor={'#342d38'}>
                    {messages.map((message, i) => (
                      <Box key={i} display="flex" flexDirection={sendMessages[i] === "doctor" ? "row" : "row-reverse"} marginY={1}>
                        <Avatar name={sendMessages[i]} size="sm" marginRight={2} />
                        <Text fontFamily={"Work sans"} fontSize={"20px"} textAlign={sendMessages[i] === "doctor" ? "left" : "right"}>
                          <span style={{
                            backgroundColor: sendMessages[i] === "doctor" ? "#B9F5D0" : "#BEE3F8",
                            color: "black",
                            borderRadius: "20px",
                            padding: "10px 15px",
                            maxWidth: "75%",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                          }}>
                            {message}
                          </span>
                        </Text>
                      </Box>
                    ))}
                  </Box>
                  <FormControl isRequired mt={3}>
                    <Input
                      variant={"outline"}
                      bg={"#E0E0E0"}
                      placeholder={psValue}
                      value={newMsg}
                      onChange={(e) => setNewMsg(e.target.value)}
                      onKeyDown={handleKeyDown}
                      borderRadius="20px"
                      _focus={{ borderColor: "teal.400" }} // Change border color on focus
                      _placeholder={{ color: "gray.500" }} // Placeholder color
                    />
                  </FormControl>
                </Box>
              )}
            </VStack>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ChatBox;
