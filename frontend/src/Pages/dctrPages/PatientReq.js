import { Box, Button, Flex, Image,  Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../patPages/Footer";

const PatientReq = ()=>{
    const toast =useToast();

    const[user,setUser] =useState();
    const[loading,setLoading] =useState();
    const[loadingChat ,setLoadingChat] = useState(false);

    const [chat,setChats] = useState();
    const userd = localStorage.getItem("dctrInfo");
    const userd1 = JSON.parse(userd);
    
    console.log(userd1);
     const email = userd1.email;
     const history  = useHistory();


    useEffect(() => {
        // Function to be called only once
        allPreq();
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const allPreq = async()=>{
        try{
            const config = {
              header:{
                  "Content-type":"application/json",
              },
            };
            console.log(email);
            const {data} = await axios.post(
              "/api/med/req",
              {email},
               config
              ); 
            
              localStorage.setItem("MediInfo",JSON.stringify(data));
            //  console.log(data);
            setUser(data);
              setLoading(false);
              console.log(user);
             
       
           }
           catch(error){
              toast({
                  title:"network Issue",
                  status:"error",
                  duration:5000,
                  isClosable:true,
                  position:"bottom",
       
              });
              setLoading(false);
           }

      }



const createNewChat = async (doctorId, patientId) => {
//   const toast = useToast(); // Use the useToast hook to get the toast function

  try {
    const response = await axios.post('/api/chats/access', {
      doctorId,
      patientId,
    });
     console.log("chat created");
    // toast.success('Chat created', { autoClose: 5000 }); // Display success toast
    console.log(response);

    toast({
      title:"chat created",
      status:"pass",
      duration:5000,
      isClosable:true,
      position:"bottom",

  });
    // return response.data.chat; // Return the newly created chat object

  } catch (error) {
    console.log('Error creating chat:');

  //   toast({
  //     title:"chat alread",
  //     status:"pass",
  //     duration:5000,
  //     isClosable:true,
  //     position:"bottom",

  // });
   
  }
};

      
       

    return (
        <>
           <Box overflowY={"scroll"} maxHeight={"70vh"}>
            <Text textAlign={"center"} fontFamily={"work sans"} fontSize={"30px"}> User's request for Online Appointment </Text>
            <Flex flexWrap="wrap" justifyContent="space-between">
      {user &&
        user.map((item, index) => (
            <Box height={"40vh"}  width={"90%"} display={"flex"} flexDirection={"row"} key={index} margin={"5%"} marginBottom={"1%"} borderRadius={"20px"} borderWidth={"5px"}>
                  <Box width={"20%"} height={"100%"} borderRightWidth={"5px"} display={"flex" } flexDirection={"column"} alignItems={"center"}>
                  <Image marginTop={"8px"} borderRadius={"full"} boxSize={"150px"} src={item.pic}  />
                  <Text> name : {item.nameP} </Text>
                  <Text> phone Number : {item.phnumber}</Text>
                  <Text> Email : {item.emailP}</Text>
                  
                   </Box>
                  <Box width={"60%"} height={"100%"}  >
                  <Text marginLeft={"5%"} fontFamily={"work sans"} fontSize={"25px"}> Problem : {item.problem} </Text>
                  <Text marginLeft={"5%"} fontFamily={"work sans"} fontSize={"25px"}> Decies : {item.dctrtype}  </Text> 
                  <Text marginLeft={"5%"} fontFamily={"work sans"} fontSize={"25px"}> deciese time : {item.deciTime} </Text>
                  <Text marginLeft={"5%"} fontFamily={"work sans"} fontSize={"25px"}> severiety : {item.serverity} </Text>
                  <Text marginLeft={"5%"} fontFamily={"work sans"} fontSize={"25px"}> Previous Doctor : {item.prevDctr} </Text></Box>
                  <Box width={"20%"} height={"100%"}  display={"flex"}  flexDirection ={"column" } justifyContent={"center"} alignItems={"center"}>
                  
                  <Button className="btn" onClick={()=>{createNewChat(userd1._id,item._id )}}> click here to connect</Button> 
                  <Button className="btn"> decline the request</Button> 
                  </Box>
            </Box>
        ))}
    </Flex>

              
            
           </Box>

           <Footer/>
        </>
    )
}
export default PatientReq;