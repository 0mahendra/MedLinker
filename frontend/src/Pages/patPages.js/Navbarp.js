
import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { DataState } from "../../context/DataProvider";
import ProfileModal from "./ProfileModal";

import { keyframes } from "@emotion/react";

const Navbarp = ()=>{


    const {user} = DataState();
    console.log(user);

    const neonBorderAnimation = keyframes`
  0% { border-color: #ff00ff; }
  25% { border-color: #00ff00; }
  50% { border-color: #00ffff; }
  75% { border-color: #ffff00; }
  100% { border-color: #ff00ff; }
`;
   

    return (
        <> 

          
          <Box width={"100vw"} display={"flex"} flexDirection={"row"} >
             {/* starting segemenet  */}
             <Box width={"20%"} height={"10vh"}  display={"flex"} flexDir={"row"} >
              <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/healthcare-3099180-2578767.png?f=webp&w=256"/> 
            <Text fontStyle={"Bold"} fontSize={"26px"} marginTop={"8px"} marginLeft={"25px"}>MedLinker</Text>
             </Box>

             {/* middle segmenet  */}
             <Box width={"60%"} height={"10vh"} display={ "flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>

                <Button variant={"ghost"} _hover={{  borderColor: "blue.500", borderWidth: "2px"       
      }}> Home</Button>
                <Button variant={"ghost"} _hover={{  borderColor: "blue.500", borderWidth: "2px"       
      }} > Communication</Button>
                <Button variant={"ghost"}  _hover={{  borderColor: "blue.500", borderWidth: "2px"       
      }}> Report's</Button>
                <Button variant={"ghost"}  _hover={{  borderColor: "blue.500", borderWidth: "2px"       
      }} > find Doctor's</Button>
             </Box>
              {/* end segmenet */}
              <Box width={"20%"} height={"10vh"} display={"flex"} flexDirection={"row-reverse"} alignItems={"center"}>
              
                 <ProfileModal  user={user}/>
              </Box>

             
          </Box>


        
        </>
        
    )
};

export default Navbarp;