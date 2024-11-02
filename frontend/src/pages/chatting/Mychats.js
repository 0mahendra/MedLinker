import { Avatar, Box, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Mychats = ({chat}) => {
    const toast = useToast(); // Call useToast within the functional component
    const history =useHistory();
    const [loggedUser, setLoggedUser] = useState([]);
    const [messages, setMessages] = useState([]);
    let data1;
    const[chaton ,setChaton] = useState(false);
    const token = localStorage.getItem("token");
    console.log(token);

    let sender = localStorage.getItem("sender");
    // let dctrData = localStorage.getItem("dctrInfo");
    // console.log("this is sender in mychat's page",sender);
    // console.log(chat.doctorId);


    const ChatsDetails = async () => {
      
        // const [loading, setLoading] = useState(false);
        
        // console.log(patientId);
        const userId = chat.userId;
        const dctrId = chat.doctorId;
        // console.log(chat);
        
      
        console.log("this is patient id ", userId);
        
        
        try {
          const config = {
            headers: {
              "Content-Type": "application/json", 
              Authorization: `Bearer ${token}`, 
            },
          };
            // console.log(patientId.patientId);
            let data;
    if (sender === "patient") {
      const response = await axios.post(`/api/dctr/getInfo/${dctrId}`, config);
      data = response.data;
    } else {
      const response = await axios.post(`/api/patient/getInfo/${userId}`, config);
      data = response.data;
      console.log(response);
    }
             console.log(data);
            
                setLoggedUser(data);
                data1 = data;
                console.log(data1);
        } catch (error) {
            toast({
                title: "Error occurred",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            // setLoading(false);
            
        }
    };

    

   const handleChat = async()=>{
    
    let content = "";
    let chatId = chat._id;
    console.log("this chat id from mychats" ,chatId);
    // localStorage.setItem("chaton","true");
    localStorage.setItem("chatId", JSON.stringify(chatId));
    // history.push("/ChatBox" ,sender = {sender});

    // console.log(chatId);
     try{
      const config = {
        headers: {
          "Content-Type": "application/json", 
          Authorization: `Bearer ${token}`, 
        },
      };
         
        const messages = await axios.post(`/api/messages/chatId/send`, {chatId,sender,content}, config);
        // const data = await messages
        // console.log();
      
        // history.push("/ChatBox");
        // console.log(messages);
        
         
        
     }catch(eror){
        console.log(eror);
     }


     
      history.push("/Chatbox" , {loggedUser}  );   
      // history.push("/Commu/AboutUs"   );   
   }

    useEffect(() => {
        // Fetch chats for the current user
        ChatsDetails();
    }, []);

    // console.log(loggedUser.nameP);

    // console.log(sender);

    return (
        <>
            
            <Box
      
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="200%"
      d="flex"
      flexDirection={"row"}
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
      onClick={handleChat}
    >

    {sender ==="patient" ? (
        <Box width={"auto"}>

        <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name= {loggedUser.name}
        
      />
      <Box>
        <Text>{loggedUser.name}</Text>
        <Text fontSize="xs">
          <b>Email :  </b>
          {loggedUser.email}
        </Text>
      </Box>'
      </Box>
    ) :(
        <Box>
        <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name= {loggedUser.name}
        src={loggedUser.pic}
      />
      <Box>
        <Text>{loggedUser.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {loggedUser.email}
        </Text>
      </Box>
      </Box>


    )}
     
    </Box>
        </>
    );
};

export default Mychats;
