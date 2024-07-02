import React, { useState } from "react";
import Navbarp from "./Navbarp";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import UserDetails from "./UserDetail";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const DctrProfilep = ()=>{

    const user1 = localStorage.getItem("userInfo");
    const user = JSON.parse(user1);
      // console.log(user);
      const location = useLocation();
      const dctrData = location.state.dctrData;
      // console.log(user);
      // console.log(dctrData);
    
      const[display,setDisplay] =useState("none");
  const handleClick = ()=>{
    setDisplay(display === "none" ? "block" : "none");
  }
  
    return (
          <>

            <Box display={"flex"} flexDirection={"row"} bgColor={"#2a3970"}>
            <Box height={"100vh"} display={"block"}>
            <Navbarp/>
            </Box>
            <Box display={"flex"} flexDir={"row"} marginLeft={"2%"} height={"100vh"}>
              <Box  display ={"flex"} flexDirection={"column"} alignItems ={"center"}width={"50%"} height = {"100vh"} borderWidth={"2px"} borderRadius={"20px"} >
              <Image borderRadius={"full"} boxSize={"150px"} src={dctrData.pic}  />
              <Text fontFamily={"work sans"} fontSize={"35px"} color={"white"}> Name : {dctrData.name}</Text>
              <Text fontFamily={"work sans"} fontSize={"20px"} color={"white"}>Email : {dctrData.email} </Text>
              <Text fontFamily={"work sans"} fontSize={"20px"} color={"white"}>phone Number : {dctrData.phnumber} {}</Text>

              <Text fontFamily={"work sans"} fontSize={"20px"} color={"white"}>Qualification : {dctrData.qualification} </Text>
              <Text textAlign={"left"}> About me</Text>
              <Text marginBottom={"0.3px"} textAlign={"left"} color={"white"} > Hello everyone this is {dctrData.name} a {dctrData.mproficiency}  My Approach combines  with 
                      evidance -based medicine with personalised  care to ensure the best possible outcomes for my patients </Text>
              <Text color={"white"} fontSize={"25px"}> want an online appointment</Text>
              <Button className="btn" onClick={handleClick}> click here</Button>
              
 
              </Box>
              <Box   className="userd" marginLeft={"20px"} width={"45%"}  display={display}>
                <UserDetails user={user}  dctrData = {dctrData}/>
              </Box>
             
            </Box>
            </Box>
          </>    
    )
}
export default DctrProfilep;