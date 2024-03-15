import React, { useState } from "react";
import Navbarp from "./Navbarp";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import UserDetails from "./UserDetails";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const DctrProfilep = ()=>{

    const user1 = localStorage.getItem("userInfo");
    const user = JSON.parse(user1);
      console.log(user);
      const location = useLocation();
      const data = location.state ? location.state.data : null;
      console.log(data);
    
      const[display,setDisplay] =useState("none");
  const handleClick = ()=>{
    setDisplay(display === "none" ? "block" : "none");
  }
    return (
          <>
            <Navbarp/>
            <Box display={"flex"} flexDir={"row"}>
              <Box  display ={"flex"} flexDirection={"column"} alignItems ={"center"}width={"50%"} height = {"90vh"} borderWidth={"2px"} borderRadius={"20px"} >
              <Image borderRadius={"full"} boxSize={"150px"} src={"https://images.meesho.com/images/products/261875438/m5vp4_512.webp"}   />
              <Text> name of doctor</Text>
              <Text>Email of dctr </Text>
              <Text> phnumber of dctr</Text>

              <Text>qualification </Text>

              <Text > about him</Text>
              <Text> want an online appointment</Text>
              <Button className="btn" onClick={handleClick}> click here</Button>
              <Text > icons aa agyege</Text>
 
              </Box>
              <Box   className="userd" marginLeft={"20px"} width={"45%"}  display={display}>
                <UserDetails user={user}/>
              </Box>
             
            </Box>
          </>    
    )
}
export default DctrProfilep;
