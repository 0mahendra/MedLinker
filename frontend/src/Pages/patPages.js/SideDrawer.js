import { Box, Text } from "@chakra-ui/react";
import React from "react";
 const SideDrawer =()=>{
     return (
        <>
        <Box display={"flex"} flexDirection={"row"}>
        <Box width={"30%"} marginRight={"3px"} borderWidth={"1px"} height={"90vh"} borderRadius={"5px"}>
             <Text fontFamily={"work-sans"} textAlign={"center"} fontSize={"30px"}> My Chats</Text>
             
               
        </Box>

        <Box width={"69.5%"} borderWidth={"1px"} height={"90vh"} borderRadius={"5px"}>

        </Box>
        </Box>
    </>
  );
 };
 export default SideDrawer;
