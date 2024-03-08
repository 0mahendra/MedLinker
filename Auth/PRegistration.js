
import React from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import LoginPr from "./LgoinPr";
import SignupPr from "./SignupPr";
const PRegistration = ()=>{
    return (
        <>
          <video src="https://static.vecteezy.com/system/resources/previews/004/747/818/global-network-medical-healthcare-system-protection-concept-futuristic-medical-health-protection-shield-icon-with-shining-wireframe-above-multiple-on-dark-blue-background-seamless-loop-4k-animation-free-video.webm"
              autoPlay loop
              style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
              ></video>


        <Box  width ={"50vw"} height = {"100vh"} borderRadius={"20px"} borderWidth={"1px"} borderColor={"red"}>

        <Tabs variant='soft-rounded' colorScheme='green'>

        <TabList   margin={"auto"}>
            <Tab marginTop={"5px"} width={"50%"}>sign Up</Tab>
            <Tab marginTop={"5px"} width={"50%"}>login</Tab>
        </TabList>
        <TabPanels>
    <TabPanel>
      <LoginPr></LoginPr>
    </TabPanel>
    <TabPanel>
      <SignupPr></SignupPr>
    </TabPanel>
  </TabPanels>

        </Tabs>

        </Box>      
            

        </>
    )
}

export default PRegistration;